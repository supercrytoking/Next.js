import { TextArea, Text, Box } from 'grommet';
import styled from 'styled-components';

export const StyledBoxWrapper = styled(Box)`
  padding: 15px 15px;
  border-radius: 2px;
  border: 1px solid #ccc;
  background: #fff;

  &.error {
    border-color: #f44336;
  }
`;

export const StyledTextArea = styled(TextArea)`
  font-weight: 400;
  font-size: 14x;
  resize: none;
  height: 100%;
  padding: 7px 0;

  &.error {
    ::placeholder {
      color: #f44336;
    }
  }

  &.fullWidth {
    width: 100%;
  }
`;

export const StyledError = styled(Text)`
  margin: 3px 15px;
  color: #f44336;
  font-size: 0.75rem;
`;
