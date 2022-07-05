import { ReduxState, ReduxAction } from '../../types/common';
import {
  ALL_EMPLOYEES_ERROR,
  ALL_EMPLOYEES_REQUEST,
  ALL_EMPLOYEES_SUCCESS,
} from '../actions/types';

const defaultState: ReduxState = {
  error: false,
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
  errorMessage: '',
  data: {
    items: {
      count: 0,
      results: [],
    },
  },
};

/**
 * User directory reducer
 */
export const directoryReducer = (
  state: ReduxState = defaultState,
  action: ReduxAction
): ReduxState => {
  const { type, payload } = action;
  switch (type) {
    case ALL_EMPLOYEES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case ALL_EMPLOYEES_SUCCESS:
      return {
        error: false,
        errorMessage: '',
        isLoading: false,
        isFulfilled: true,
        isRejected: false,
        allEmployees: payload.results,
      };
    case ALL_EMPLOYEES_ERROR:
      return {
        ...defaultState,
        error: true,
        isLoading: false,
        isFulfilled: false,
        isRejected: true,
        errorMessage: `${payload.name}: ${payload.message}`,
      };
    default:
      return state;
  }
};
