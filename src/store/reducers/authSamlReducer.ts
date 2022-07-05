import { ReduxState, ReduxAction } from '../../types/common';

import {
  AUTH_SAML_LOGIN_SUCCESS,
  AUTH_SAML_LOGIN_FAIL,
  AUTH_SAML_LOGIN_REQUEST,
} from '../actions/types';

const defaultState: ReduxState = {
  error: false,
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
  errorMessage: '',
  data: {},
};

export const authSamlReducer = (
  state: ReduxState = defaultState,
  action: ReduxAction
): ReduxState => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_SAML_LOGIN_REQUEST:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    case AUTH_SAML_LOGIN_SUCCESS:
      return {
        error: false,
        errorMessage: '',
        isLoading: false,
        isFulfilled: true,
        isRejected: false,
        data: payload,
      };
    case AUTH_SAML_LOGIN_FAIL:
      return {
        ...defaultState,
        error: true,
        isLoading: false,
        isFulfilled: false,
        isRejected: true,
        errorMessage: payload,
      };

    default:
      return defaultState;
  }
};
