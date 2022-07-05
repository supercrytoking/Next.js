import styled from 'styled-components';
import { Box, TextInput, Text } from 'grommet';

export const TextInputContainer = styled(Box)`
  padding: 7px 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #fff;

  &.error {
    border-color: #ff0000;
    color: #ff0000;
    input {
      ::placeholder {
        color: #ff0000;
      }
    }
    span {
      color: #ff0000;
    }
  }
`;

export const TextInputWrapper = styled(TextInput)`
  font-weight: 400;
  font-size: 1rem;
  background-color: #fff;
  border: 0;
  padding: 0;
  color: #555;
  line-height: 1.5rem;
`;

export const TextInputLabel = styled(Text)`
  font-size: 0.7rem;
  color: #b4b7c3;
`;

export const TextError = styled(Text)`
  font-size: 0.7rem;
  color: #ff0000;
`;
