import React from 'react';
import { Box } from 'grommet';
import { PageProps } from './Page.types';

const Page: React.FC<PageProps> = ({ children, ...otherProps }) => (
  <Box flex direction="row" {...otherProps}>
    {children}
  </Box>
);

export default Page;
