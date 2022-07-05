import React, {
  ChangeEvent,
  useRef,
  useReducer,
  useEffect,
  KeyboardEvent,
  useState,
} from 'react';
import { Button, Drop } from 'grommet';
import { FiChevronDown } from 'react-icons/fi';

// Components
import Spinner from '../../Spinner';
import {
  TextLabel,
  StyledTextInput,
  StyledBoxWrapper,
  StyledTextOption,
  StyledBoxSuggestions,
  SelectAheadContainer,
} from './SelectAhead.styled';

// Libs and Hooks
import DropdownService from '../../../services/DropdownService';
import useDebounce from '../../../hooks/useDebounce';

// Types
import {
  State,
  Action,
  ActionType,
  SelectAheadProps,
  SelectAheadOption,
} from './SelectAhead.types';
import DropdownKeyboardNavigation from './DropdownKeyboardNavigation';

const initialState = {
  options: [],
  isOpen: false,
  isError: false,
  isLoading: false,
  selectedOption: undefined,
};

const stateReducer = (state: State, action: Action): State => {
  const {
    type,
    payload: {
      options = [],
      isOpen = false,
      selectedOption = undefined,
      selectedValue = undefined,
    } = {},
  } = action;

  const actionStateMap = {
    [ActionType.OPEN]: { ...state, isOpen },
    [ActionType.FAILURE]: { ...state, isError: true, isLoading: false },
    [ActionType.REQUEST]: { ...state, isLoading: true, isError: false },
    [ActionType.SELECT]: { ...state, selectedOption, selectedValue },
    [ActionType.SUCCESS]: {
      ...state,
      isLoading: false,
      isError: false,
      options,
    },
  };
  return actionStateMap[type] || state;
};

const dropdownApi = new DropdownService();

const SelectAhead: React.FC<SelectAheadProps> = ({
  typeName,
  label = undefined,
  value = undefined,
  onChange = undefined,
  placeholder = undefined,
  disabled = false,
}) => {
  // Main control refs
  const targetRef = useRef<HTMLDivElement | any>();
  const inputRef = useRef<HTMLInputElement | any>();
  const actionButtonRef = useRef<HTMLButtonElement | any>();

  const [activeListItem, setActiveListItem] = useState<number>(-1);

  // Control state
  const [
    { isLoading, isOpen, options, selectedOption, selectedValue = '' },
    dispatch,
  ] = useReducer(stateReducer, initialState);

  useEffect(() => {
    dispatch({
      type: ActionType.SELECT,
      payload: { selectedValue: value || '' },
    });
  }, [value]);

  const closeDropDown = () => {
    dispatch({ type: ActionType.OPEN, payload: { isOpen: false } });
  };

  const openDropDown = () => {
    dispatch({ type: ActionType.OPEN, payload: { isOpen: true } });
  };

  const makeDataRequest = async (val?: string) => {
    dispatch({ type: ActionType.REQUEST });
    try {
      const {
        data: { results },
      } = await dropdownApi.findAll({
        q: val || '',
        typeName,
      });

      dispatch({
        type: ActionType.SUCCESS,
        payload: {
          options: results.map(({ name, value }: any) => ({ name, value })),
        },
      });
    } catch (e) {
      dispatch({ type: ActionType.FAILURE });
    }
  };

  const makeDataRequestDebounced = useDebounce(makeDataRequest, 300);

  const handleChange = (e: ChangeEvent<any>) => {
    const {
      target: { value },
    } = e;

    if (!value) {
      onChange && onChange(e);
      closeDropDown();
    } else {
      !isOpen && openDropDown();
      makeDataRequestDebounced(value);
    }

    dispatch({
      type: ActionType.SELECT,
      payload: { selectedValue: value },
    });
  };

  const handleClick = () => {
    if (!isOpen) {
      openDropDown();
      makeDataRequest();
    } else {
      closeDropDown();
    }
  };

  const handleKeydown = (e: KeyboardEvent<any>) => {
    const { keyCode } = e;
    if (keyCode === 13 && options.length === 1) {
      handleOptionSelect(e, options[0]);
    }
  };

  const handleOptionSelect = (
    e: ChangeEvent<any>,
    option: SelectAheadOption
  ) => {
    dispatch({ type: ActionType.SELECT, payload: { selectedOption: option } });
    closeDropDown();
    onChange && onChange({ ...e, target: { value: option } });
  };

  return (
    <SelectAheadContainer flex direction="column">
      {label && <TextLabel>{label}</TextLabel>}
      <StyledBoxWrapper direction="row" ref={targetRef}>
        <StyledTextInput
          type="text"
          name="selectAheadInput"
          ref={inputRef}
          onChange={handleChange}
          onKeyDown={handleKeydown}
          placeholder={placeholder}
          value={selectedOption ? selectedOption.name : selectedValue}
          disabled={!typeName || disabled}
        />
        <Button
          plain
          focusIndicator={false}
          tabIndex={-1}
          icon={isLoading ? <Spinner size={24} /> : <FiChevronDown />}
          disabled={!typeName || disabled}
          ref={actionButtonRef}
          onClick={handleClick}
        />
      </StyledBoxWrapper>
      {targetRef.current && isOpen && (
        <Drop
          target={targetRef.current}
          align={{ top: 'bottom', left: 'left' }}
          elevation="medium"
          onClickOutside={(e) => {
            const { target } = e;
            if (![inputRef.current, actionButtonRef.current].includes(target)) {
              closeDropDown();
            }
          }}
        >
          <StyledBoxSuggestions>
            {isLoading && (
              <StyledTextOption size="small">Loading...</StyledTextOption>
            )}
            <DropdownKeyboardNavigation
              dropdownList={options}
              onEnter={(e: KeyboardEvent, selectedItem) => {
                actionButtonRef.current.blur();
                handleOptionSelect(e, selectedItem);
              }}
              getActiveItem={(activeItem) => {
                setActiveListItem(activeItem);
              }}
            >
              {options.length > 0 &&
                options.map((option, index) => (
                  <StyledTextOption
                    onClick={(e) => handleOptionSelect(e, option)}
                    key={index}
                    id={activeListItem === index ? 'active' : ''}
                  >
                    {option.name}
                  </StyledTextOption>
                ))}
            </DropdownKeyboardNavigation>
          </StyledBoxSuggestions>
        </Drop>
      )}
    </SelectAheadContainer>
  );
};

export default SelectAhead;
