export type ForgotPasswordFormProps = {
  onSubmit: (values: { email: string }) => void;
  isSubmitting: boolean;
  errorMessage: string;
};
