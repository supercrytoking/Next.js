import { Box, TextInput, Text } from 'grommet';
import styled, { css } from 'styled-components';

export const StyledTextInput = styled(TextInput)`
  border: none;
  padding: 0;
`;

export const SelectAheadContainer = styled(Box)`
  background-color: #ffffff;
  border: 1px solid #dcdfe9;
  border-radius: 2px;
  padding: 7px 10px;
  justify-content: center;
`;

export const StyledBoxWrapper = styled(Box)`
  background-color: #ffffff;
`;

export const StyledBoxSuggestions = styled(Box)`
  max-height: 400px;
`;

export const StyledTextOption = styled(Text)`
  cursor: pointer;
  padding: 12px;
  font: inherit;

  &:hover {
    background-color: #eee;
  }

  ${(props) =>
    props.id &&
    css`
      background-color: #eee;
    `}
`;

export const TextLabel = styled(Text)`
  font-size: 0.7rem;
  color: #b4b7c3;
`;
