import { TextInputProps } from '../TextInput/TextInput.types';
import { TextInputProps as GrommetTextInputProps } from 'grommet/components/TextInput';

export type PasswordInputProps = Omit<TextInputProps, 'type'> &
  GrommetTextInputProps & { onChange?: (e: any) => void };
