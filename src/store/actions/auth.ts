import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_REQUEST,
  AUTH_ME_REQUEST,
  AUTH_ME_SUCCESS,
  AUTH_ME_FAIL,
  AUTH_PASSWORD_FORGOT_REQUEST,
  AUTH_PASSWORD_FORGOT_SUCCESS,
  AUTH_PASSWORD_FORGOT_FAIL,
  AUTH_VERIFICATION_CODE_RESEND,
  AUTH_VERIFICATION_CODE_VERIFY_REQUEST,
  AUTH_VERIFICATION_CODE_VERIFY_SUCCESS,
  AUTH_VERIFICATION_CODE_VERIFY_FAIL,
  AUTH_PASSWORD_CHANGE_REQUEST,
  AUTH_PASSWORD_CHANGE_FAIL,
  AUTH_PASSWORD_CHANGE_SUCCESS,
  AUTH_PASSWORD_FORGOT_RESET,
  AUTH_TOKEN_REFRESH_REQUEST,
  AUTH_OID_STORE_USER,
} from './types';
import { ReduxAction } from '../../types/common';
import { Credentials, TPasswordReset } from '../../types/auth';

export const authLoginRequestAction = (
  credentials: Credentials
): ReduxAction => ({
  type: AUTH_LOGIN_REQUEST,
  payload: credentials,
});

export const authLoginSuccessAction = (userData: object): ReduxAction => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: userData,
});

export const authLoginFailAction = (error: any) => ({
  type: AUTH_LOGIN_FAIL,
  payload: error,
});

export const authMeRequestAction = (): ReduxAction => ({
  type: AUTH_ME_REQUEST,
});

export const authMeSuccessAction = (payload: object): ReduxAction => ({
  type: AUTH_ME_SUCCESS,
  payload,
});

export const authMeFailAction = (payload: any): ReduxAction => ({
  type: AUTH_ME_FAIL,
  payload,
});

export const authLogoutRequestAction = (): ReduxAction => ({
  type: AUTH_LOGOUT_REQUEST,
  payload: {},
});

export const authLogoutSuccessAction = () => ({
  type: AUTH_LOGOUT_SUCCESS,
  payload: {},
});

export const authPasswordForgotRequestAction = (
  payload: TPasswordReset
): ReduxAction => ({
  type: AUTH_PASSWORD_FORGOT_REQUEST,
  payload,
});

export const authPasswordForgotSuccessAction = (
  payload: TPasswordReset
): ReduxAction => ({
  type: AUTH_PASSWORD_FORGOT_SUCCESS,
  payload,
});

export const authPasswordForgotFailAction = (payload: string): ReduxAction => ({
  type: AUTH_PASSWORD_FORGOT_FAIL,
  payload,
});

export const authVerificationCodeResend = (): ReduxAction => ({
  type: AUTH_VERIFICATION_CODE_RESEND,
});

export const authPasswordForgotResetAction = (): ReduxAction => ({
  type: AUTH_PASSWORD_FORGOT_RESET,
});

export const authVerificationCodeVerifyRequest = (
  payload: TPasswordReset
): ReduxAction => ({
  type: AUTH_VERIFICATION_CODE_VERIFY_REQUEST,
  payload,
});

export const authVerificationCodeVerifySuccess = (
  payload: TPasswordReset
): ReduxAction => ({
  type: AUTH_VERIFICATION_CODE_VERIFY_SUCCESS,
  payload,
});

export const authVerificationCodeVerifyFail = (
  payload: string
): ReduxAction => ({
  type: AUTH_VERIFICATION_CODE_VERIFY_FAIL,
  payload,
});

export const authPasswordChangeRequest = (
  payload: TPasswordReset
): ReduxAction => ({
  type: AUTH_PASSWORD_CHANGE_REQUEST,
  payload,
});

export const authPasswordChangeSuccess = (
  payload: TPasswordReset
): ReduxAction => ({
  type: AUTH_PASSWORD_CHANGE_SUCCESS,
  payload,
});

export const authPasswordChangeFail = (payload: string): ReduxAction => ({
  type: AUTH_PASSWORD_CHANGE_FAIL,
  payload,
});

export const authTokenRefreshRequestAction = (): ReduxAction => ({
  type: AUTH_TOKEN_REFRESH_REQUEST,
  payload: {},
});

export const authOidStoreUser = (user: any): ReduxAction => ({
  type: AUTH_OID_STORE_USER,
  payload: user,
});
