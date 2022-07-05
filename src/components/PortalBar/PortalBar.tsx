import React from 'react';
import { Box, BoxProps } from 'grommet';

interface PortalBarProps {
  name: string;
}

const PortalBar: React.FC<PortalBarProps & BoxProps> = ({ name, ...props }) => (
  <Box {...props} id={name}></Box>
);
export default PortalBar;
