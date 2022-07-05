import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Box, Text } from 'grommet';

import ForgotPasswordForm from '../../components/Forms/ForgotPasswordForm';
import { authPasswordForgotRequestAction } from '../../store/actions/auth';
import {
  getAuthErrorMsg,
  getIsVerificationSent,
} from '../../store/selectors/auth';
import ForgotPasswordLayout from '../../components/PageForgotPassword/ForgotPasswordLayout';
import useOrganizationName from '../../hooks/useOrganizationName';

const ForgotPassword: React.FC<Record<string, unknown>> = () => {
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const errorMessage = useSelector(getAuthErrorMsg);
  const isVerificationSent = useSelector(getIsVerificationSent);
  const organizationName = useOrganizationName();

  useEffect(() => {
    if (errorMessage) {
      setIsFormSubmitting(false);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (isVerificationSent === true) {
      router.push('/forgot-password/verify');
    }
  }, [router, isVerificationSent]);

  const handlePasswordReset = (values: { email: string }) => {
    setIsFormSubmitting(true);

    dispatch(
      authPasswordForgotRequestAction({
        resetPasswordBy: values.email,
        organizationName,
      })
    );
  };

  return (
    <ForgotPasswordLayout>
      <Box height={{ min: '50%' }}>
        <Box
          direction="column"
          margin={{ bottom: 'large', top: 'medium' }}
          gap="xsmall"
        >
          <Text size="3rem" weight="bold" color="#000">
            Forgot Password
          </Text>
          <Text size="medium" color="#000" weight={500}>
            Enter email or phone number associated to your account
          </Text>
        </Box>
        <Box>
          <ForgotPasswordForm
            isSubmitting={isFormSubmitting}
            onSubmit={handlePasswordReset}
            errorMessage={errorMessage}
          />
        </Box>
      </Box>
    </ForgotPasswordLayout>
  );
};

export default ForgotPassword;
