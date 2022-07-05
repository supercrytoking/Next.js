import { takeLatest, put, call } from 'redux-saga/effects';

import { AUTH_SAML_LOGIN_REQUEST } from '../actions/types';

import SamlAuthService from '../../services/SamlAuthService';
import { ReduxAction } from '../../types/common';

import {
  authSamlLoginSuccessAction,
  authSamlLoginFailAction,
} from '../actions/authSaml';

const samlAuthHttpService = new SamlAuthService();

function* authSamlLoginRequestWorker(action: ReduxAction) {
  const { payload } = action;
  try {
    const { error, data, statusCode, statusText } = yield call(
      samlAuthHttpService.login,
      payload
    );

    if (!error) {
      yield put(authSamlLoginSuccessAction(data));
    } else {
      const errorMessage =
        typeof data === 'string' ? data : `${statusCode} ${statusText}`;

      yield put(authSamlLoginFailAction(errorMessage));
    }
  } catch (err) {
    yield put(authSamlLoginFailAction(err));
  }
}

// Sagas
export function* authSamlLoginRequestSaga() {
  yield takeLatest(AUTH_SAML_LOGIN_REQUEST, authSamlLoginRequestWorker);
}
