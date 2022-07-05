import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text } from 'grommet';
import NewPasswordForm from '../../components/Forms/NewPasswordForm';
import { authPasswordChangeRequest } from '../../store/actions/auth';
import {
  getAuthErrorMsg,
  getIsPasswordChanged,
  getResetPasswordBy,
} from '../../store/selectors/auth';
import ForgotPasswordLayout from '../../components/PageForgotPassword/ForgotPasswordLayout';

const NewPassword: React.FC<Record<string, unknown>> = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
  const errorMessage = useSelector(getAuthErrorMsg);
  const resetPasswordBy = useSelector(getResetPasswordBy);
  const isPasswordChanged = useSelector(getIsPasswordChanged);

  useEffect(() => {
    if (!resetPasswordBy) {
      // redirect to step 1 if user directly lands on /new-password page
      router.push('/forgot-password');
    }
  }, [router, resetPasswordBy]);

  useEffect(() => {
    if (errorMessage) {
      setIsFormSubmitting(false);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (isPasswordChanged === true) {
      router.push('/login');
    }
  }, [router, isPasswordChanged]);

  const handlePasswordReset = (values: {
    password: string;
    confirmPassword: string;
  }) => {
    setIsFormSubmitting(true);
    dispatch(authPasswordChangeRequest({ newPassword: values.password }));
  };

  return (
    <ForgotPasswordLayout>
      <Box height={{ min: '60%' }}>
        <Box direction="column" margin={{ bottom: 'medium' }} gap="xsmall">
          <Text size="2rem" weight="bold" color="#000">
            Set new Password
          </Text>
          <Text size="small" color="grey1" weight={500}>
            Please set new Password for your account
          </Text>
        </Box>
        <NewPasswordForm
          isSubmitting={isFormSubmitting}
          onSubmit={handlePasswordReset}
          errorMessage={errorMessage}
        />
      </Box>
    </ForgotPasswordLayout>
  );
};

export default NewPassword;
