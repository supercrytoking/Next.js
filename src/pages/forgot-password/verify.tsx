import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Text } from 'grommet';
import VerificationForm from '../../components/Forms/VerificationForm';
import {
  authVerificationCodeResend,
  authVerificationCodeVerifyRequest,
} from '../../store/actions/auth';
import {
  getAuthErrorMsg,
  getIsVerifyCodeVerified,
  getResetPasswordBy,
} from '../../store/selectors/auth';
import ForgotPasswordLayout from '../../components/PageForgotPassword/ForgotPasswordLayout';

const Verify: React.FC<Record<string, unknown>> = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
  const [showResendPrompt, setShowResendPrompt] = useState<boolean>(false);
  const errorMessage = useSelector(getAuthErrorMsg);
  const isCodeVerified = useSelector(getIsVerifyCodeVerified);
  const resetPasswordBy = useSelector(getResetPasswordBy);

  useEffect(() => {
    if (!resetPasswordBy) {
      // redirect to step 1 if user directly lands on /verify page
      router.push('/forgot-password');
    }
  }, [router, resetPasswordBy]);

  useEffect(() => {
    setTimeout(() => {
      setShowResendPrompt(true);
      // show prompt after 1 minute
    }, 60 * 1000);
  }, []);

  useEffect(() => {
    if (isCodeVerified === true) {
      router.push('/forgot-password/new-password');
    }
  }, [router, isCodeVerified]);

  useEffect(() => {
    if (errorMessage) {
      setIsFormSubmitting(false);
    }
  }, [errorMessage]);

  const onResetHandler = async () => {
    await dispatch(authVerificationCodeResend());
    router.push('/forgot-password');
  };

  const onFormSubmitHandler = (values: string) => {
    setIsFormSubmitting(true);
    dispatch(authVerificationCodeVerifyRequest({ code: values }));
  };

  const getMaskedValue = () => {
    if (resetPasswordBy) {
      const offset = 5;
      const length = resetPasswordBy.length;
      const asterisks = new Array(length - offset).fill('*').join('');
      return `${asterisks}${resetPasswordBy.slice(length - offset, length)}`;
    }
    return '';
  };

  return (
    <ForgotPasswordLayout>
      <Box>
        <Box direction="column" margin={{ bottom: 'medium' }} gap="xsmall">
          <Text size="2rem" weight="bold" color="#000">
            Verification Code
          </Text>
          <Text size="small" color="grey1" weight={500}>
            The code was sent to {getMaskedValue()}.
          </Text>
        </Box>
        <VerificationForm
          onSubmit={onFormSubmitHandler}
          isSubmitting={isFormSubmitting}
        />
        <Box height={{ min: 'xsmall' }}>
          {showResendPrompt && (
            <Text>
              Didn&apos;t receive a code? &nbsp;
              <Button plain onClick={onResetHandler}>
                <Text color="blue">Resend</Text>
              </Button>
            </Text>
          )}
        </Box>

        <Box>
          {errorMessage && (
            <Box align="center">
              <Text color="red">{errorMessage}</Text>
            </Box>
          )}
        </Box>
      </Box>
    </ForgotPasswordLayout>
  );
};

export default Verify;
