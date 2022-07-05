import React from 'react';
import { Box, Text } from 'grommet';
import DirectoryLayout from '../../components/PageDirectory/DirectoryLayout';
import { PageWithLayoutProps } from '../../types/common';

const Groups: PageWithLayoutProps = () => {
  return (
    <Box align="center" justify="center" height="100vh">
      <Text> Groups</Text>
    </Box>
  );
};

Groups.getLayout = (page) => <DirectoryLayout>{page}</DirectoryLayout>;

export default Groups;
