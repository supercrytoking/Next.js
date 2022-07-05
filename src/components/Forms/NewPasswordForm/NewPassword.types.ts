export type NewPasswordFormProps = {
  onSubmit: (values: { password: string; confirmPassword: string }) => void;
  isSubmitting: boolean;
  errorMessage: string;
};
