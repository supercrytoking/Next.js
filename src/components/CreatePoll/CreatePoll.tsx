import React from 'react';
import { Box, Select, Text, Button } from 'grommet';
import { TextInput } from '../Inputs';
import { FiPlus } from 'react-icons/fi';
import styled from 'styled-components';

import { BTN_TYPE } from 'src/store/constants';

export const SelectBox = styled(Box)`
  font-family: 'MiamiSansRegular', sans-serif;
  font-weight: 400;

  button {
    border: none;
  }
`;

export const SelectBoxContainer = styled(Box)`
  border: 1px solid #e0e1e7;
  border-radius: 6px;
`;

function CreatPoll({
  changeCurrentView,
}: {
  changeCurrentView: (viewType: string) => void;
}) {
  const dynamicForm = () => {
    return (
      <Box
        pad="medium"
        justify="center"
        align="center"
        width="100%"
        direction="row"
      >
        <Box width="90%">
          <TextInput placeholder="Choice 1" valid={true} />
          <br />
          <TextInput placeholder="Choice 2" valid={true} />
        </Box>

        <Box width="10%" pad="small">
          <Button>
            <FiPlus size="20px" />
          </Button>
        </Box>
      </Box>
    );
  };

  const daysDropDown = ({
    title,
    placeholder,
  }: {
    title: string;
    name: string;
    placeholder: string;
    options: [];
  }) => {
    return (
      <SelectBoxContainer
        margin={{ right: '10px' }}
        onClick={() => {}}
        width="100px"
      >
        <Text color="#B4B7C3" size="12px" margin={{ left: '12px', top: '8px' }}>
          {title}
        </Text>
        <SelectBox>
          <Box className="border-less">
            <Select
              valueKey={{ key: 'value', reduce: true }}
              labelKey="label"
              //  open={state.openLanguage}
              name="languageCode"
              onChange={() => {}}
              options={['1']}
              placeholder={placeholder}
            />
          </Box>
        </SelectBox>
      </SelectBoxContainer>
    );
  };

  const pollLength = () => {
    return (
      <Box>
        <Box direction="row">
          {daysDropDown({
            title: 'Days',
            name: '',
            placeholder: '1',
            options: [],
          })}

          {daysDropDown({
            title: 'Hours',
            name: '',
            placeholder: '0',
            options: [],
          })}

          {daysDropDown({
            title: 'Minutes',
            name: '',
            placeholder: '0',
            options: [],
          })}
        </Box>
      </Box>
    );
  };
  return (
    <Box border={{ color: 'lightgrey' }} round="small">
      {dynamicForm()}
      <Box border="top">
        <Box pad="small">
          <Text margin={{ top: '5px', bottom: '5px' }}>Poll Length</Text>
          {pollLength()}
        </Box>
      </Box>

      <Box
        onClick={() => changeCurrentView(BTN_TYPE.POST)}
        border="top"
        pad="small"
        justify="center"
        align="center"
      >
        <Button color="red">Remove poll</Button>
      </Box>
    </Box>
  );
}

export default CreatPoll;
