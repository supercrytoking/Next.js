import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Box, Text } from 'grommet';
import { FiArrowLeft } from 'react-icons/fi';

import { ButtonInput, PasswordInput } from '../../Inputs';
import Spinner from '../../Spinner';
import { UnderlinedText } from '../../common';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import { NewPasswordFormProps } from './NewPassword.types';

const NewPasswordForm: React.FC<NewPasswordFormProps> = ({
  isSubmitting,
  onSubmit,
  errorMessage,
}) => {
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { handleSubmit, register, errors } = useForm();

  const onLoginRedirectHandler = () => {
    router.push('/login');
  };

  const renderPasswordInput = () => (
    <Box height={{ min: 'xsmall' }}>
      <PasswordInput
        name="password"
        label="Password"
        placeholder="Enter new password"
        ref={register({ required: true })}
        valid={!Boolean(errors.password)}
        errors={errors.password ? ['Password is required'] : []}
        disabled={isSubmitting}
        value={password}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target!.value);
        }}
      />
      <PasswordStrengthMeter password={password} />
    </Box>
  );

  const renderConfirmPasswordInput = () => (
    <Box margin={{ bottom: 'medium' }}>
      <PasswordInput
        name="confirmPassword"
        label="Password"
        placeholder="Confirm new password"
        ref={register({
          validate: {
            required: (v) => v.length > 0 || 'Confirm Password is required',
            matches: (v) => v === password || 'Password do not match',
          },
        })}
        valid={!Boolean(errors.confirmPassword)}
        errors={errors.confirmPassword ? [errors.confirmPassword.message] : []}
        disabled={isSubmitting}
        value={confirmPassword}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setConfirmPassword(event.target.value);
        }}
      />
    </Box>
  );

  const renderSubmitInput = () => (
    <Box margin={{ vertical: 'small' }}>
      <ButtonInput
        btnColor="black"
        disabled={isSubmitting}
        label={
          isSubmitting ? <Spinner size={24} color="#fff" /> : 'RESET PASSWORD'
        }
        type="submit"
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
        {renderPasswordInput()}
        {renderConfirmPasswordInput()}
        {renderErrorIfExists()}
        {renderSubmitInput()}
        {renderLoginRedirect()}
      </form>
    </Box>
  );
};

export default NewPasswordForm;
