import { ReduxState } from '../../types/common';

const baseSelector = (state: ReduxState) => state.auth;

export const getIsLoggedIn = (state: ReduxState) =>
  baseSelector(state).isLoggedIn;

export const getAuthErrorMsg = (state: ReduxState) =>
  baseSelector(state).errorMessage;

const getPasswordResetState = (state: ReduxState) =>
  baseSelector(state).passwordReset;

export const getIsVerificationSent = (state: ReduxState) =>
  getPasswordResetState(state).isCodeSent;

export const getResetPasswordBy = (state: ReduxState) =>
  getPasswordResetState(state).resetPasswordBy;

export const getIsVerifyCodeVerified = (state: ReduxState) =>
  getPasswordResetState(state).isCodeVerified;

export const getVerificationCode = (state: ReduxState) =>
  getPasswordResetState(state).code;

export const getIsPasswordChanged = (state: ReduxState) =>
  getPasswordResetState(state).isPasswordChanged;
