import React, { ReactNode, useEffect } from 'react';
import { Box, ResponsiveContext } from 'grommet';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// Components
import Page from '../Page';
import { ContentWrapper } from './ForgotPasswordPage.styled';

// Typings
import { authPasswordForgotResetAction } from '../../store/actions/auth';
import InfoBox from '../PageLogin/InfoBox';
import { ScreenSize } from '../../types/common';
import ContentFooter from '../PageLogin/ContentFooter';
import ContentHeader from '../PageLogin/ContentHeader';
import useOrganizationName from '../../hooks/useOrganizationName';

/**
 * Forgot Password Page component
 */
const ForgotPasswordLayout = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector(({ auth: { isLoggedIn } }: any) => isLoggedIn);
  const size = React.useContext(ResponsiveContext) as ScreenSize;
  const organization = useOrganizationName();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/directory');
    }
  }, [isLoggedIn, router]);

  useEffect(() => {
    dispatch(authPasswordForgotResetAction());
  }, [dispatch]);

  const renderForgotPasswordBox = () => (
    <ContentWrapper
      background={'white'}
      justify="between"
      align="stretch"
      pad={{ horizontal: 'large', vertical: 'medium' }}
    >
      <ContentHeader organization={organization} />
      <Box
        fill="horizontal"
        height={size === ScreenSize.small ? '100%' : '60%'}
        justify="start"
        pad={{ vertical: 'medium' }}
      >
        {children}
      </Box>
      <ContentFooter />
    </ContentWrapper>
  );

  const renderInfoBox = () => <InfoBox />;

  return (
    <Page
      direction="row-responsive"
      justify="stretch"
      height={{ min: '100vh' }}
    >
      {renderForgotPasswordBox()}
      {renderInfoBox()}
    </Page>
  );
};

export default ForgotPasswordLayout;
