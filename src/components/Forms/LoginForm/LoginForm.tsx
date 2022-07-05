import React from 'react';
import { Box, Text } from 'grommet';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

// Components
import { LoginFormProps } from './LoginForm.types';
import { TextInput, ButtonInput, PasswordInput } from '../../Inputs';
import Spinner from '../../Spinner';
import { UnderlinedText } from './LoginForm.styled';

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  loading,
  errorMessage,
}) => {
  const { handleSubmit, register, errors } = useForm();
  const router = useRouter();

  const onForgotPasswordClickHandler = () => {
    router.push('/forgot-password');
  };

  const renderLoginInput = () => (
    <Box margin={{ bottom: 'medium' }}>
      <TextInput
        type="email"
        name="userName"
        label="Email address"
        placeholder="Enter email address"
        ref={register({ required: true })}
        valid={!Boolean(errors.userName)}
        errors={errors.userName ? ['Login is required'] : []}
        disabled={loading}
      />
    </Box>
  );

  const renderPasswordInput = () => (
    <Box margin={{ bottom: 'medium' }}>
      <PasswordInput
        name="password"
        label="Password"
        placeholder="Enter password"
        ref={register({ required: true })}
        valid={!Boolean(errors.password)}
        errors={errors.password ? ['Password is required'] : []}
        disabled={loading}
      />
    </Box>
  );

  const renderForgotPassword = () => (
    <Box
      margin={{ bottom: 'large' }}
      onClick={onForgotPasswordClickHandler}
      aria-disabled={loading}
    >
      <UnderlinedText color="black" size="medium">
        Forgot Password?
      </UnderlinedText>
    </Box>
  );

  const renderSubmitInput = () => (
    <Box margin={{ vertical: 'small' }}>
      <ButtonInput
        type="submit"
        disabled={loading}
        label={loading ? <Spinner size={24} color="#fff" /> : 'LOGIN'}
      />
    </Box>
  );

  const renderErrorIfExists = () =>
    errorMessage && (
      <Box align="center">
        <Text color="red">{errorMessage}</Text>
      </Box>
    );

  return (
    <Box direction="column">
      <form
        name="loginForm"
        aria-label="loginForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        {renderLoginInput()}
        {renderPasswordInput()}
        {renderForgotPassword()}
        {renderSubmitInput()}
        {renderErrorIfExists()}
      </form>
    </Box>
  );
};

export default LoginForm;
