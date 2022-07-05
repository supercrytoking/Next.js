import React from 'react';
import { Box, Text, Select } from 'grommet';
import { useForm } from 'react-hook-form';

import { TextInput, ButtonInput } from '../../Inputs';
import { PortalBarControls } from '../../PortalBar';
import { CreditCardFormProps } from './CreditCardForm.types';

export const CreditCardForm: React.FC<CreditCardFormProps> = ({
  onSubmit,
  portalBarName,
}) => {
  const { handleSubmit, register, errors } = useForm();

  const renderCardNumberInput = () => (
    <Box margin={{ bottom: 'medium' }} direction="column" gap="small">
      <Text>CARD NUMBER</Text>
      <TextInput
        type="text"
        name="cardNumber"
        label="Card number"
        ref={register({ required: true })}
        valid={!Boolean(errors.userName)}
        errors={errors.userName ? ['User name is required'] : []}
      />
    </Box>
  );

  const renderExpDateInput = () => (
    <Box
      margin={{ bottom: 'medium' }}
      direction="row"
      gap="small"
      align="center"
    >
      <Text>EXPIRATIOPN</Text>
      <Box background="#fff">
        <Select options={[]} value="" placeholder="Month" size="medium" />
      </Box>
      <Text>/</Text>
      <Box background="#fff">
        <Select options={[]} value="" placeholder="Year" size="medium" />
      </Box>
    </Box>
  );

  const renderSecurityCodeInput = () => (
    <Box
      margin={{ bottom: 'medium' }}
      direction="column"
      gap="small"
      width="150px"
    >
      <Text>SECURITY CODE</Text>
      <TextInput
        type="text"
        name="securityCode"
        label="Security Code"
        ref={register({ required: true })}
        valid={!Boolean(errors.userName)}
        errors={errors.userName ? ['User name is required'] : []}
      />
    </Box>
  );

  const renderSubmitInput = () =>
    portalBarName ? (
      <PortalBarControls barName={portalBarName}>
        <ButtonInput
          type="submit"
          label="Save Credit Card"
          onClick={handleSubmit(onSubmit)}
        />
      </PortalBarControls>
    ) : (
      <Box>
        <ButtonInput type="submit" label="Save Credit Card" />
      </Box>
    );

  return (
    <Box
      width="640px"
      background="#ebebeb"
      round="6px"
      elevation="small"
      direction="row"
      align="center"
    >
      <form
        style={{ display: 'flex', gap: '10px' }}
        name="creditCardForm"
        aria-label="creditCardForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box
          width="430px"
          height="300px"
          direction="column"
          background="#ebebeb"
          pad="medium"
          round="6px"
          elevation="small"
          justify="between"
        >
          {renderCardNumberInput()}
          {renderExpDateInput()}
          {renderSubmitInput()}
        </Box>
        <Box
          pad={{ top: 'medium' }}
          margin={{ left: 'medium' }}
          direction="row"
        >
          {renderSecurityCodeInput()}
        </Box>
      </form>
    </Box>
  );
};
