export type GroupFormValues = {
  groupName: string;
  groupDescription: string;
};

export type GroupFormProps = {
  onSubmit: (values: GroupFormValues) => void;
  portalBarName?: string;
};
