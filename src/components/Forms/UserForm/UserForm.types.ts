export type UserFormValues = {
  email: string;
  userName: string;
};

export type UserFormProps = {
  onSubmit: (values: UserFormValues) => void;
  portalBarName?: string;
};
