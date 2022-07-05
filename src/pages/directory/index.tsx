import React from 'react';
import { Box, Text } from 'grommet';
import DirectoryLayout from '../../components/PageDirectory/DirectoryLayout';
import { PageWithLayoutProps } from '../../types/common';

const Home: PageWithLayoutProps = () => {
  return (
    <Box align="center" justify="center" height="100vh">
      <Text> Home</Text>
    </Box>
  );
};

Home.getLayout = (page) => <DirectoryLayout>{page}</DirectoryLayout>;

export default Home;
