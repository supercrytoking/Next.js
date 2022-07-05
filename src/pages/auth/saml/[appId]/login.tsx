import React, { createRef, useEffect } from 'react';
import { Box, Text, Anchor, ResponsiveContext } from 'grommet';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Page from '../../../../components/Page';
import SamlLoginFrom from '../../../../components/Forms/SamlLoginFrom';
import ContentFooter from '../../../../components/PageLogin/ContentFooter';
import ContentHeader from '../../../../components/PageLogin/ContentHeader';
import { LoginBoxContainer } from '../../../../components/PageLogin/LoginPage.styled';

import { authSamlLoginRequestAction } from '../../../../store/actions/authSaml';

// Typings
import { SamlLoginDto } from '../../../../types/auth';
import { ParsedUrlQuery } from 'querystring';
import { ScreenSize } from '../../../../types/common';
import useOrganizationName from '../../../../hooks/useOrganizationName';
import InfoBox from '../../../../components/PageLogin/InfoBox';
import { appsFetchAppNameRequestAction } from '../../../../store/actions/apps';

const SamlLogin: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    data: samlApiResponseData,
    isLoading,
    applicationName: {
      data: { name: applicationName },
      isFulfilled: appNameLoaded,
    },
  } = useSelector(
    ({ saml: { data, isLoading }, apps: { applicationName } }: any) => ({
      data,
      isLoading,
      applicationName,
    })
  );
  const size = React.useContext(ResponsiveContext) as ScreenSize;
  const organizationName = useOrganizationName();
  const formRef = createRef<HTMLFormElement>();

  useEffect(() => {
    if (samlApiResponseData.destination && formRef.current) {
      formRef.current.submit();
    }
  }, [formRef, samlApiResponseData]);

  useEffect(() => {
    const { appId = '' } = router.query;
    if (!appNameLoaded && appId) {
      dispatch(
        appsFetchAppNameRequestAction(Array.isArray(appId) ? appId[0] : appId)
      );
    }
  }, [appNameLoaded, router.query]);

  const handleSamlFormSubmit = (values: SamlLoginDto) => {
    const {
      SAMLRequest = '',
      RelayState = '',
      appId = '',
    }: ParsedUrlQuery = router.query;

    dispatch(
      authSamlLoginRequestAction({
        ...values,
        applicationId: Array.isArray(appId) ? appId[0] : appId,
        samlRequest: Array.isArray(SAMLRequest) ? SAMLRequest[0] : SAMLRequest,
        relayState: Array.isArray(RelayState) ? RelayState[0] : RelayState,
      })
    );
  };

  const handleForgotPasswordClick = () => {
    const currentUrl = `${window.location.pathname}${window.location.search}`;
    localStorage.setItem('from-to-forgot', currentUrl);
    router.push('/forgot-password');
  };

  const renderLoginBox = () => (
    <LoginBoxContainer
      pad={{ horizontal: 'large', vertical: 'medium' }}
      justify="between"
    >
      <ContentHeader organization={organizationName} />
      <Box
        fill="horizontal"
        height={size === ScreenSize.small ? '100%' : '60%'}
        justify="start"
      >
        <Box direction="column" margin={{ vertical: 'large' }} gap="xsmall">
          <Text size="3rem" weight="bold" color="#000">
            Login into {applicationName}
          </Text>
        </Box>
        <Box>
          <SamlLoginFrom onSubmit={handleSamlFormSubmit}>
            {renderForgotPassword()}
          </SamlLoginFrom>
        </Box>
      </Box>
      <ContentFooter disabled={isLoading} />
    </LoginBoxContainer>
  );

  const renderInfoBox = () => <InfoBox />;

  const renderForgotPassword = () => (
    <Box margin={{ vertical: '30px' }}>
      <Anchor color="black" onClick={handleForgotPasswordClick}>
        <Text weight="normal">Forgot Password?</Text>
      </Anchor>
    </Box>
  );

  const renderSamlRedirectForm = () => (
    <div style={{ visibility: 'hidden' }}>
      <form
        method="post"
        action={samlApiResponseData.destination}
        ref={formRef}
      >
        <input
          type="hidden"
          name="SAMLResponse"
          defaultValue={samlApiResponseData.samlResponse}
        />
        <input
          type="hidden"
          name="RelayState"
          defaultValue={samlApiResponseData.responseRelayState}
        />
      </form>
    </div>
  );

  return (
    <Page
      direction="row-responsive"
      justify="stretch"
      height={{ min: '100vh' }}
    >
      {renderLoginBox()}
      {renderInfoBox()}
      {renderSamlRedirectForm()}
    </Page>
  );
};

export default SamlLogin;
