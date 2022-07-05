import { ReactNode, Ref } from 'react';
import { MarginType } from 'grommet/utils';

export type TextInputProps = {
  type?: string;
  ref?: Ref<any>;
  label?: ReactNode;
  margin?: MarginType;
  valid?: boolean;
  disabled?: boolean;
  errors?: Array<string>;
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
};
