import React from 'react';
import { Box } from 'grommet';
import Page from '../Page';
import Header from '../Header';

const AppLayout: React.FC = ({ children }) => (
  <Page direction="column" height="100vh" pad={{ horizontal: 'medium' }}>
    <Header />
    <Box background={'white'} gap="small" flex>
      {children}
    </Box>
  </Page>
);

export default AppLayout;
