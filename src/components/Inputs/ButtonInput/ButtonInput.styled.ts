import styled from 'styled-components';
import { Box, Button } from 'grommet';
import { ButtonInputProps } from './ButtonInput.types';

export const SubmitInputContainer = styled(Box)``;

export const ButtonInputWrapper = styled(Button)<ButtonInputProps>`
  border-radius: 4px;
  color: #fff;
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.07rem;
  min-height: 58px;
  min-width: 160px;
  background: ${(props) => props.btnColor || '#071C5F'};
  border-color: ${(props) => props.btnColor || '#071C5F'};
`;
