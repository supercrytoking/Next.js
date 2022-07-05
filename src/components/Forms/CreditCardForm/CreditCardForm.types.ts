export type CreditCardFormValues = Record<string, unknown>;

export type CreditCardFormProps = {
  onSubmit: (values: CreditCardFormValues) => void;
  portalBarName?: string;
};
