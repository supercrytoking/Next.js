import React from 'react';
import { Box, ButtonType } from 'grommet';

import { ButtonInputProps } from './ButtonInput.types';
import { ButtonInputWrapper } from './ButtonInput.styled';

export const ButtonInput: React.FC<
  ButtonInputProps & Omit<ButtonType, 'primary'>
> = ({ ...restProps }) => (
  <Box direction="row">
    <ButtonInputWrapper fill primary {...restProps} />
  </Box>
);
