import React from 'react';
import { Box, Text } from 'grommet';
import DirectoryLayout from '../../components/PageDirectory/DirectoryLayout';
import { PageWithLayoutProps } from '../../types/common';

const Myteam: PageWithLayoutProps = () => {
  return (
    <Box align="center" justify="center" height="100vh">
      <Text> MyTeam</Text>
    </Box>
  );
};

Myteam.getLayout = (page) => <DirectoryLayout>{page}</DirectoryLayout>;

export default Myteam;
