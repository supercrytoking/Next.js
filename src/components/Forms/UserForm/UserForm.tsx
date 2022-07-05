import React from 'react';
import { Box } from 'grommet';
import { useForm } from 'react-hook-form';

import { TextInput, ButtonInput, PasswordInput } from '../../Inputs';
import { PortalBarControls } from '../../PortalBar';
import { UserFormProps } from './UserForm.types';

export const UserForm: React.FC<UserFormProps> = ({
  onSubmit,
  portalBarName,
}) => {
  const { handleSubmit, register, errors } = useForm();

  const renderNameInput = () => (
    <Box margin={{ bottom: 'medium' }}>
      <TextInput
        type="text"
        name="userName"
        label="User Name"
        placeholder="Give user a name"
        ref={register({ required: true })}
        valid={!Boolean(errors.userName)}
        errors={errors.userName ? ['User name is required'] : []}
      />
    </Box>
  );

  const renderEmailInput = () => (
    <Box margin={{ bottom: 'medium' }}>
      <TextInput
        type="email"
        name="userEmail"
        label="User Email"
        placeholder="Give user an email"
        ref={register({ required: true })}
        valid={!Boolean(errors.userName)}
        errors={errors.userName ? ['User name is required'] : []}
      />
    </Box>
  );

  const renderPasswordsInput = () => (
    <Box margin={{ bottom: 'medium' }} basis="1/2">
      <PasswordInput
        name="userPassword"
        label="User Password"
        placeholder="Give user a password"
        ref={register({ required: true })}
        valid={!Boolean(errors.userPassword)}
        errors={errors.userPassword ? ['Password is required'] : []}
      />
    </Box>
  );

  const renderPasswordsConfirmInput = () => (
    <Box margin={{ bottom: 'medium' }} basis="1/2">
      <PasswordInput
        name="userPasswordConfirm"
        label="User Password Confirm"
        placeholder="Confirm password"
        ref={register({ required: true })}
        valid={!Boolean(errors.userPasswordConfirm)}
        errors={
          errors.userPasswordConfirm
            ? ['Password confirmation is required']
            : []
        }
      />
    </Box>
  );

  const renderSubmitInput = () =>
    portalBarName ? (
      <PortalBarControls barName={portalBarName}>
        <ButtonInput
          type="submit"
          label="Create User"
          onClick={handleSubmit(onSubmit)}
        />
      </PortalBarControls>
    ) : (
      <Box>
        <ButtonInput type="submit" label="Create User" />
      </Box>
    );

  return (
    <Box direction="column">
      <form
        name="userForm"
        aria-label="userForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        {renderNameInput()}
        {renderEmailInput()}
        <Box direction="row" gap="10px" fill="horizontal" align="center">
          {renderPasswordsInput()}
          {renderPasswordsConfirmInput()}
        </Box>
        {renderSubmitInput()}
      </form>
    </Box>
  );
};
