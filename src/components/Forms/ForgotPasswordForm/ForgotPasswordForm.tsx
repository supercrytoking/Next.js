import React from 'react';
import { Box, Text } from 'grommet';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';

// Components
import { ForgotPasswordFormProps } from './ForgotPassword.types';
import { TextInput, ButtonInput } from '../../Inputs';
import Spinner from 'src/components/Spinner';
import { UnderlinedText } from '../../common';

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  isSubmitting,
  onSubmit,
  errorMessage,
}) => {
  const { handleSubmit, register, errors } = useForm();
  const router = useRouter();

  const onLoginRedirectHandler = () => {
    const loginUrl = localStorage.getItem('from-to-forgot');
    if (loginUrl) {
      router.push(loginUrl);
      localStorage.removeItem('from-to-forgot');
    } else {
      router.push('/login');
    }
  };

  const renderEmailPhoneInput = () => (
    <Box margin={{ bottom: 'medium' }}>
      <TextInput
        type="input"
        name="email"
        label="Email or phone"
        placeholder="Enter email or phone"
        ref={register({ required: true })}
        valid={!Boolean(errors.email)}
        errors={errors.email ? ['Email or phone is required'] : []}
        disabled={isSubmitting}
      />
    </Box>
  );

  const renderSubmitInput = () => (
    <Box margin={{ vertical: 'small' }}>
      <ButtonInput
        type="submit"
        disabled={isSubmitting}
        label={
          isSubmitting ? <Spinner size={24} color="#fff" /> : 'RESET PASSWORD'
        }
      />
    </Box>
  );

  const renderErrorIfExists = () =>
    errorMessage && (
      <Box align="center">
        <Text color="red">{errorMessage}</Text>
      </Box>
    );

  const renderLoginRedirect = () => (
    <Box
      direction="row"
      gap="xsmall"
      align="center"
      margin={{ top: 'medium' }}
      onClick={onLoginRedirectHandler}
    >
      <FiArrowLeft />
      <UnderlinedText color="black" size="medium">
        Back to Login
      </UnderlinedText>
    </Box>
  );

  return (
    <Box direction="column">
      <form
        name="loginForm"
        aria-label="loginForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        {renderEmailPhoneInput()}
        {renderErrorIfExists()}
        {renderSubmitInput()}
        {renderLoginRedirect()}
      </form>
    </Box>
  );
};

export default ForgotPasswordForm;
