import { ReduxState, ReduxAction } from '../../types/common';

import {
  APPS_FETCH_ALL_FAIL,
  APPS_FETCH_ALL_REQUEST,
  APPS_FETCH_ALL_SUCCESS,
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
 * Applications reducer
 */
export const appsReducer = (
  state: ReduxState = defaultState,
  action: ReduxAction
): ReduxState => {
  const { type, payload } = action;
  switch (type) {
    case APPS_FETCH_ALL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case APPS_FETCH_ALL_SUCCESS:
      return {
        error: false,
        errorMessage: '',
        isLoading: false,
        isFulfilled: true,
        isRejected: false,
        data: { items: payload.results },
      };
    case APPS_FETCH_ALL_FAIL:
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
