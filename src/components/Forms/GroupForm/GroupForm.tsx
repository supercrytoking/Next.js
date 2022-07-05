import React from 'react';
import { Box } from 'grommet';
import { useForm } from 'react-hook-form';

import { PortalBarControls } from '../../PortalBar';
import { ButtonInput, TextInput, TextAreaInput } from '../../Inputs';
import { GroupFormProps } from './GroupForm.types';

export const GroupForm: React.FC<GroupFormProps> = ({
  onSubmit,
  portalBarName,
}) => {
  const { handleSubmit, register, errors } = useForm();

  const renderNameInput = () => (
    <Box margin={{ bottom: 'medium' }}>
      <TextInput
        type="text"
        name="groupName"
        label="Group name"
        placeholder="Give your new group a name"
        ref={register({ required: true })}
        valid={!Boolean(errors.groupName)}
        errors={errors.userName ? ['Group name is required'] : []}
      />
    </Box>
  );

  const renderDescriptionInput = () => (
    <Box margin={{ bottom: 'medium' }}>
      <TextAreaInput
        name="groupDescription"
        label="Group description"
        placeholder="Give your new group a description"
        ref={register({ required: false })}
      />
    </Box>
  );

  const renderSubmitInput = () =>
    portalBarName ? (
      <PortalBarControls barName={portalBarName}>
        <ButtonInput
          type="submit"
          label="Create Group"
          onClick={handleSubmit(onSubmit)}
        />
      </PortalBarControls>
    ) : (
      <Box>
        <ButtonInput type="submit" label="Create Group" />
      </Box>
    );

  return (
    <Box direction="column">
      <form
        name="groupForm"
        aria-label="groupForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        {renderNameInput()}
        {renderDescriptionInput()}
        {renderSubmitInput()}
      </form>
    </Box>
  );
};
