import React from 'react';
import ReactCodeInput from 'react-verification-code-input';
import { StyledWrapper } from './VerificationForm.styled';
import { VerificationFormTypes } from './VerificationForm.types';

export const VerificationForm: React.FC<VerificationFormTypes> = ({
  onSubmit,
  isSubmitting,
}) => {
  return (
    <StyledWrapper margin={{ bottom: 'large' }}>
      <ReactCodeInput
        className="verification-form"
        fieldHeight={100}
        fieldWidth={51}
        fields={6}
        onComplete={onSubmit}
        type="number"
        loading={isSubmitting}
      />
    </StyledWrapper>
  );
};
