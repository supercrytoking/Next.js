import { ChangeEvent } from 'react';

export enum SelectAheadType {
  STATES = 'STATES',
}

export enum ActionType {
  OPEN = 'OPEN',
  SELECT = 'SELECT',
  SUCCESS = 'success',
  REQUEST = 'request',
  FAILURE = 'failure',
}

export type SelectAheadProps = {
  name?: string;
  value?: string | number;
  typeName: string;
  treeView?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (e: ChangeEvent<any>) => void;
  closeOnChange?: boolean;
  label?: string;
};

export type SelectAheadOption = { name: string; value: string | number };

export type Action = { type: ActionType; payload?: Partial<State> };

export type State = {
  isOpen: boolean;
  isError?: boolean;
  isLoading: boolean;
  options: Array<SelectAheadOption>;
  selectedOption?: SelectAheadOption;
  selectedValue?: string | number;
};
