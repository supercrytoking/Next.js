import React, { useState } from 'react';
import { Button } from 'grommet';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { TextInput } from '../TextInput';
import { PasswordInputProps } from './PasswordInput.types';

export const PasswordInput: React.FC<PasswordInputProps> = React.forwardRef(
  (props, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const type = showPassword ? 'text' : 'password';

    const handleTogglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const renderEndAdornment = () => (
      <Button
        plain
        onClick={handleTogglePasswordVisibility}
        icon={showPassword ? <FiEyeOff color="#555" /> : <FiEye color="#555" />}
      />
    );

    return (
      <TextInput
        {...props}
        type={type}
        ref={ref}
        endAdornment={renderEndAdornment()}
      />
    );
  }
);
