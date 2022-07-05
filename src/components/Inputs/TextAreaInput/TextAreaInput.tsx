import React from 'react';
import { Box, BoxProps, Text, TextAreaProps } from 'grommet';
import classnames from 'classnames';

import {
  StyledBoxWrapper,
  StyledTextArea,
  StyledError,
} from './TextAreaInput.styled';

import { TextAreaInputProps } from './TextAreaInput.types';

export const TextAreaInput: React.FC<TextAreaInputProps> = React.forwardRef(
  ({ label, error, errorMessage, ...props }, ref) => {
    return (
      <Box {...(props as BoxProps)}>
        <StyledBoxWrapper direction="column" justify="center">
          {label && (
            <Text size="0.7rem" color="#b4b7c3">
              {label}
            </Text>
          )}
          <StyledTextArea
            plain
            ref={ref}
            className={classnames({ error })}
            {...(props as TextAreaProps)}
          />
        </StyledBoxWrapper>
        {errorMessage && <StyledError>{errorMessage}</StyledError>}
      </Box>
    );
  }
);
