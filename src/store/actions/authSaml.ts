import {
  AUTH_SAML_LOGIN_FAIL,
  AUTH_SAML_LOGIN_REQUEST,
  AUTH_SAML_LOGIN_SUCCESS,
} from './types';

import { ReduxAction } from '../../types/common';
import { SamlLoginDto } from '../../types/auth';

export const authSamlLoginRequestAction = (
  samlLoginData: SamlLoginDto
): ReduxAction => ({
  type: AUTH_SAML_LOGIN_REQUEST,
  payload: samlLoginData,
});

export const authSamlLoginSuccessAction = (
  userData: Record<string, unknown>
): ReduxAction => ({
  type: AUTH_SAML_LOGIN_SUCCESS,
  payload: userData,
});

export const authSamlLoginFailAction = (error: any) => ({
  type: AUTH_SAML_LOGIN_FAIL,
  payload: error,
});
