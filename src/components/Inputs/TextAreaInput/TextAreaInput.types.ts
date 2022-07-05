import { ReactNode, Ref } from 'react';
import { BoxProps, TextAreaProps } from 'grommet';

export type TextAreaInputProps = TextAreaProps &
  Partial<BoxProps> & {
    label?: ReactNode;
    error?: boolean;
    errorMessage?: string;
    ref?: Ref<any>;
  };
