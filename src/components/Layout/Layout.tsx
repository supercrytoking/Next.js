import React, { ReactNode, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Box } from 'grommet';

// Components
import Spinner from '../Spinner';
import { LayoutWrapper } from './Layout.styled';
import ActivityDetector from '../ActivityDetector';
import { ACTIVITY_AUTO_LOGOUT, ACTIVITY_TIMEOUT } from '../../store/constants';

import useAuth from '../../hooks/useAuth';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isLoggedIn = useSelector(({ auth: { isLoggedIn } }: any) => isLoggedIn);

  const { processToken, logout } = useAuth();

  const renderSuspenseFallback = () => (
    <Box flex direction="row" align="center" justify="center">
      <Spinner />
    </Box>
  );

  return (
    <LayoutWrapper
      background={'mainBackground'}
      height={{ min: '100vh' }}
      direction="column"
    >
      {isLoggedIn ? (
        <ActivityDetector
          onAccept={() => processToken('')}
          onDecline={logout}
          timeout={ACTIVITY_TIMEOUT}
          autoDeclineTimeout={ACTIVITY_AUTO_LOGOUT}
        >
          <Box>
            <Suspense fallback={renderSuspenseFallback()}>{children}</Suspense>
          </Box>
        </ActivityDetector>
      ) : (
        children
      )}
    </LayoutWrapper>
  );
};

export default Layout;
