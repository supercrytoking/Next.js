import React, { useEffect } from 'react';
import { Box, ResponsiveContext, Text } from 'grommet';
import { GetServerSidePropsContext } from 'next';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// Components
import Page from '../components/Page';
import LoginForm from '../components/Forms/LoginForm';
import InfoBox from '../components/PageLogin/InfoBox';
import ContentHeader from '../components/PageLogin/ContentHeader';
import ContentFooter from '../components/PageLogin/ContentFooter';

// Actions and hooks
import { LoginBoxContainer } from '../components/PageLogin/LoginPage.styled';
import useOrganizationName from '../hooks/useOrganizationName';
import useAuth from '../hooks/useAuth';

// Typings
import { ScreenSize } from '../types/common';
import Spinner from '../components/Spinner';

interface LoginPageProps {
  redirectUrl?: string;
  forceLogOut?: boolean;
}

/**
 * Login Page component
 */
const LoginPage = ({ redirectUrl = '' }: LoginPageProps) => {
  const router = useRouter();
  const { login, processToken, logout } = useAuth();
  const {
    isLoggedIn,
    accessToken,
    loading,
    errorMessage,
    logoutLoading,
  } = useSelector(
    ({
      auth: { isLoggedIn, accessToken, loading, errorMessage, logoutLoading },
    }: any) => ({
      isLoggedIn,
      accessToken,
      loading,
      errorMessage,
      logoutLoading,
    })
  );
  const size = React.useContext(ResponsiveContext) as ScreenSize;
  const organizationName = useOrganizationName();

  const updateQueries = () =>
    router.push(
      `${router.pathname}?redirect_url=${redirectUrl}${
        process.env.NODE_ENV === 'development' && router.query.tenant_name
          ? `&tenant_name=${router.query.tenant_name}`
          : ''
      }`,
      undefined,
      {
        shallow: true,
      }
    );

  useEffect(() => {
    const { query } = router;
    if (isLoggedIn && accessToken && !logoutLoading) {
      if (query.force_log_out) {
        logout();
        updateQueries();
      } else {
        processToken(redirectUrl);
      }
    } else {
      if (query.force_log_out) {
        updateQueries();
      }
    }
  }, [isLoggedIn, accessToken, router.replace]);

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
            Welcome!
          </Text>
          <Text size="1.1rem" color="#000">
            Use your account to login
          </Text>
        </Box>
        <Box>
          <LoginForm
            onSubmit={login}
            loading={loading}
            errorMessage={errorMessage}
          />
        </Box>
      </Box>
      <ContentFooter disabled={loading} />
    </LoginBoxContainer>
  );

  const renderInfoBox = () => <InfoBox />;

  const renderSuspense = () => (
    <Box flex direction="column" align="center" justify="center">
      <Spinner />
      <Text>Redirecting...</Text>
    </Box>
  );

  return (
    <Page
      direction="row-responsive"
      justify="stretch"
      height={{ min: '100vh' }}
    >
      {isLoggedIn ? (
        renderSuspense()
      ) : (
        <>
          {renderLoginBox()}
          {renderInfoBox()}
        </>
      )}
    </Page>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  let data: LoginPageProps = {};
  if (ctx.query && ctx.query.redirect_url) {
    const { redirect_url } = ctx.query;
    data = {
      redirectUrl: Array.isArray(redirect_url) ? redirect_url[0] : redirect_url,
    };
  }

  return {
    props: { ...data },
  };
}

export default LoginPage;
c