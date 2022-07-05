import { ReduxState, ReduxAction } from '../../types/common';

import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT_SUCCESS,
  AUTH_ME_FAIL,
  AUTH_ME_SUCCESS,
  AUTH_PASSWORD_FORGOT_REQUEST,
  AUTH_PASSWORD_FORGOT_SUCCESS,
  AUTH_PASSWORD_FORGOT_FAIL,
  AUTH_VERIFICATION_CODE_RESEND,
  AUTH_VERIFICATION_CODE_VERIFY_FAIL,
  AUTH_VERIFICATION_CODE_VERIFY_SUCCESS,
  AUTH_PASSWORD_CHANGE_REQUEST,
  AUTH_PASSWORD_CHANGE_SUCCESS,
  AUTH_PASSWORD_CHANGE_FAIL,
  AUTH_PASSWORD_FORGOT_RESET,
  AUTH_VERIFICATION_CODE_VERIFY_REQUEST,
  AUTH_LOGOUT_REQUEST,
} from '../actions/types';

const defaultState: ReduxState = {
  error: false,
  errorMessage: '',
  userData:
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('user') || '{}')
      : {},
  accessToken:
    typeof window !== 'undefined'
      ? localStorage.getItem('accessToken') || ''
      : '',
  isLoggedIn:
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('isLoggedIn') || 'false')
      : false,
  passwordReset: {
    isCodeSent: false,
    isCodeVerified: false,
    resetPasswordBy: '',
    code: '',
    isPasswordChanged: false,
  },
  logoutLoading: false,
  loading: false,
};

/**
 * Auth reducer
 */
export const authReducer = (
  state: ReduxState = defaultState,
  action: ReduxAction
): ReduxState => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_LOGIN_REQUEST:
      return {
        ...state,
        error: false,
        errorMessage: '',
        loading: true,
      };
    case AUTH_LOGIN_SUCCESS:
      const { token } = payload;

      localStorage.setItem('accessToken', token);
      localStorage.setItem('isLoggedIn', 'true');

      return {
        ...state,
        error: false,
        errorMessage: '',
        accessToken: token,
        isLoggedIn: true,
        loading: false,
      };
    case AUTH_ME_SUCCESS:
      const user = payload;
      localStorage.setItem('user', JSON.stringify(user));

      return {
        ...state,
        error: false,
        userData: user,
      };
    case AUTH_ME_FAIL:
      return {
        ...state,
        error: payload.error,
      };
    case AUTH_LOGIN_FAIL:
      return {
        ...state,
        error: true,
        errorMessage: payload,
        loading: false,
      };
    case AUTH_LOGOUT_REQUEST:
      return {
        ...state,
        logoutLoading: true,
      };
    case AUTH_LOGOUT_SUCCESS:
      localStorage.clear();
      return {
        ...defaultState,
        isLoggedIn: false,
        accessToken: '',
        logoutLoading: false,
      };
    case AUTH_PASSWORD_FORGOT_REQUEST:
      return {
        ...state,
        error: false,
        errorMessage: '',
        passwordReset: {
          ...state.passwordReset,
        },
      };
    case AUTH_PASSWORD_FORGOT_SUCCESS:
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          ...payload,
          isCodeSent: true,
        },
      };
    case AUTH_PASSWORD_FORGOT_FAIL:
      return {
        ...state,
        error: true,
        errorMessage: payload,
        passwordReset: {
          ...state.passwordReset,
          isCodeSent: false,
        },
      };
    case AUTH_VERIFICATION_CODE_RESEND:
      return {
        ...state,
        error: false,
        errorMessage: '',
        passwordReset: {
          ...state.passwordReset,
          isCodeSent: false,
          resetPasswordBy: '',
        },
      };
    case AUTH_PASSWORD_FORGOT_RESET:
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          ...defaultState.passwordReset,
        },
      };
    case AUTH_VERIFICATION_CODE_VERIFY_REQUEST:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    case AUTH_VERIFICATION_CODE_VERIFY_SUCCESS:
      return {
        ...state,
        error: false,
        errorMessage: '',
        passwordReset: {
          ...state.passwordReset,
          ...payload,
          isCodeVerified: true,
        },
      };
    case AUTH_VERIFICATION_CODE_VERIFY_FAIL:
      return {
        ...state,
        errorMessage: payload,
        passwordReset: {
          ...state.passwordReset,
          isCodeVerified: false,
        },
      };
    case AUTH_PASSWORD_CHANGE_REQUEST:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    case AUTH_PASSWORD_CHANGE_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        passwordReset: {
          ...state.passwordReset,
          isPasswordChanged: true,
        },
      };
    case AUTH_PASSWORD_CHANGE_FAIL:
      return {
        ...state,
        errorMessage: payload,
        passwordReset: {
          ...state.passwordReset,
          isPasswordChanged: false,
        },
      };
    default:
      return state;
  }
};
