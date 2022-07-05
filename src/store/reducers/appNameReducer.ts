import { ReduxState, ReduxAction } from '../../types/common';

import {
  APPS_FETCH_APP_NAME_FAIL,
  APPS_FETCH_APP_NAME_REQUEST,
  APPS_FETCH_APP_NAME_SUCCESS,
} from '../actions/types';

const defaultState: ReduxState = {
  error: false,
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
  errorMessage: '',
  data: {},
};

/**
 * Applications reducer
 */
export const appNameReducer = (
  state: ReduxState = defaultState,
  action: ReduxAction
): ReduxState => {
  const { type, payload } = action;
  switch (type) {
    case APPS_FETCH_APP_NAME_REQUEST:
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case APPS_FETCH_APP_NAME_SUCCESS:
      return {
        error: false,
        errorMessage: '',
        isLoading: false,
        isFulfilled: true,
        isRejected: false,
        data: payload,
      };
    case APPS_FETCH_APP_NAME_FAIL:
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
