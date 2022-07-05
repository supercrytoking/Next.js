import React from 'react';
import classnames from 'classnames';
import { Box, TextInputProps as GrommetTextInputProps } from 'grommet';

// Components
import {
  TextInputContainer,
  TextInputWrapper,
  TextInputLabel,
  TextError,
} from './TextInput.styled';

import { TextInputProps } from './TextInput.types';

export const TextInput: React.FC<
  TextInputProps & GrommetTextInputProps
> = React.forwardRef(
  (
    {
      label,
      margin,
      valid,
      errors = [],
      endAdornment = undefined,
      startAdornment = undefined,
      ...restProps
    },
    ref
  ) => {
    return (
      <Box>
        <TextInputContainer
          margin={margin}
          className={classnames({ error: !valid })}
        >
          <Box direction="row" align="center">
            {startAdornment && <Box pad={{ top: '5px' }}>{startAdornment}</Box>}

            <Box
              fill
              direction="column"
              pad={{
                left: startAdornment ? 'small' : '0',
                right: endAdornment ? 'small' : '0',
              }}
            >
              {label && <TextInputLabel>{label}</TextInputLabel>}
              <TextInputWrapper {...restProps} ref={ref} />
            </Box>

            {endAdornment && <Box pad={{ top: '5px' }}>{endAdornment}</Box>}
          </Box>
        </TextInputContainer>
        {errors.length > 0 &&
          errors.map((errorMessage: string, index: number) => (
            <TextError key={index}>{errorMessage}</TextError>
          ))}
      </Box>
    );
  }
);
