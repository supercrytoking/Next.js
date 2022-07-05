import { ReactNode } from 'react';
import { SamlLoginDto } from '../../../types/auth';

export type SamlLoginFormProps = {
  onSubmit: (values: SamlLoginDto) => void;
  children?: ReactNode;
};
