import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import React, { ReactNode } from 'react';
import Spinner from './Spinner';
import { Box } from 'grommet';

const WithAuth = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const isLoggedIn = useSelector(({ auth: { isLoggedIn } }: any) => isLoggedIn);

  // If user is not logged in, redirect to login component
  if (typeof window !== 'undefined' && !isLoggedIn) {
    router.push('/login');
    // console.log('should redirect to /login here');
  }

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Box fill justify="center" align="center" pad={{ vertical: 'xlarge' }}>
      <Spinner />
    </Box>
  );
};

export default WithAuth;
