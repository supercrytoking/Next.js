import React from 'react';
import { Box, Text } from 'grommet';
import DirectoryLayout from '../../components/PageDirectory/DirectoryLayout';
import { PageWithLayoutProps } from '../../types/common';

const Bookmarks: PageWithLayoutProps = () => {
  return (
    <Box align="center" justify="center" height="calc(100vh - 96px)">
      <Text> Bookmarks</Text>
    </Box>
  );
};

Bookmarks.getLayout = (page) => <DirectoryLayout>{page}</DirectoryLayout>;

export default Bookmarks;
