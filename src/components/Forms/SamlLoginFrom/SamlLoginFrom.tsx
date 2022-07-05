import React, { useEffect, useState } from 'react';
import { Box } from 'grommet';
import { useForm } from 'react-hook-form';

// Components
import { SamlLoginFormProps } from './SamlLoginForm.types';
import { TextInput, ButtonInput, PasswordInput } from '../../Inputs';
import Spinner from 'src/components/Spinner';

const SamlLoginForm: React.FC<SamlLoginFormProps> = ({
  onSubmit,
  children,
}) => {
  const { handleSubmit, register, errors, formState } = useForm();
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const { isSubmitting } = formState;
    if (isSubmitting) {
      setFormSubmitting(true);
    }
  }, [formState]);

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
        disabled={formSubmitting}
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
        disabled={formSubmitting}
      />
    </Box>
  );

  const renderSubmitInput = () => (
    <Box margin={{ vertical: 'small' }}>
      <ButtonInput
        type="submit"
        disabled={formSubmitting}
        label={formSubmitting ? <Spinner size={24} color="#fff" /> : 'LOGIN'}
      />
    </Box>
  );

  return (
    <Box direction="column">
      <form
        name="samlLoginForm"
        aria-label="samlLoginForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        {renderLoginInput()}
        {renderPasswordInput()}
        {children}
        {renderSubmitInput()}
      </form>
    </Box>
  );
};

export default SamlLoginForm;
