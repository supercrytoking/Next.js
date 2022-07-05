import { Credentials } from '../../../types/auth';

export type LoginFormProps = {
  onSubmit: (values: Credentials) => void;
  loading: boolean;
  errorMessage: string;
};
