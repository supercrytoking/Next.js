import { takeLatest, put, call, select } from 'redux-saga/effects';

import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGOUT_REQUEST,
  AUTH_ME_REQUEST,
  AUTH_PASSWORD_CHANGE_REQUEST,
  AUTH_PASSWORD_FORGOT_REQUEST,
  AUTH_VERIFICATION_CODE_VERIFY_REQUEST,
} from '../actions/types';
import {
  authLoginSuccessAction,
  authLoginFailAction,
  authLogoutSuccessAction,
  authMeSuccessAction,
  authMeFailAction,
  authPasswordForgotFailAction,
  authPasswordForgotSuccessAction,
  authVerificationCodeVerifyFail,
  authVerificationCodeVerifySuccess,
  authPasswordChangeSuccess,
  authPasswordChangeFail,
} from '../actions/auth';

import AuthService from '../../services/AuthService';

import { ReduxAction } from '../../types/common';
import { getResetPasswordBy, getVerificationCode } from '../selectors/auth';

const authHttpService = new AuthService();

function* authLoginRequestWorker(action: ReduxAction) {
  const { payload } = action;
  try {
    const { error, data, statusCode, statusText } = yield call(
      authHttpService.login,
      payload
    );

    if (!error) {
      yield put(authLoginSuccessAction(data));
    } else {
      let errorMessage;

      if (statusCode === 404) {
        errorMessage = `We can't find such an account`;
      } else {
        errorMessage =
          data && data.message ? data.message : `${statusCode} ${statusText}`;
      }

      yield put(authLoginFailAction(errorMessage));
    }
  } catch (err) {
    yield put(authLoginFailAction(err));
  }
}

function* authLogoutRequestWorker() {
  yield call(authHttpService.logout);
  yield put(authLogoutSuccessAction());
}

function* authMeRequestWorker() {
  try {
    const { error, data, statusText } = yield call(authHttpService.me);

    if (!error) {
      yield put(authMeSuccessAction(data));
    } else {
      yield put(authMeFailAction(statusText));
    }
  } catch (err) {
    yield put(authMeFailAction(err));
  }
}

function* authPasswordForgotRequestWorker(action: ReduxAction) {
  const { payload } = action;
  try {
    const { error, statusCode, statusText } = yield call(
      authHttpService.sendVerification,
      payload
    );

    if (!error) {
      yield put(authPasswordForgotSuccessAction(payload));
    } else {
      let errorMessage = '';
      if (statusCode === 400) {
        errorMessage = 'Invalid field value';
      } else if (statusCode === 404) {
        errorMessage = 'User not found';
      } else {
        errorMessage = `${statusCode} ${statusText}`;
      }
      yield put(authPasswordForgotFailAction(errorMessage));
    }
  } catch (error) {
    yield put(authPasswordForgotFailAction(error.toString()));
  }
}

function* authVerifyCodeRequestWorker(action: ReduxAction) {
  const { payload } = action;
  try {
    const resetPasswordBy: string = yield select(getResetPasswordBy);
    const { error, statusCode, statusText } = yield call(
      authHttpService.verifyCode,
      {
        ...payload,
        resetPasswordBy,
      }
    );

    if (!error) {
      yield put(authVerificationCodeVerifySuccess(payload));
    } else {
      let errorMessage = '';
      if (statusCode === 400) {
        errorMessage = 'Invalid field value';
      } else if (statusCode === 409) {
        errorMessage = 'Verification code does not match';
      } else {
        errorMessage = `${statusCode} ${statusText}`;
      }
      yield put(authVerificationCodeVerifyFail(errorMessage));
    }
  } catch (error) {
    yield put(authVerificationCodeVerifyFail(error.toString()));
  }
}

function* authChangePasswordRequestWorker(action: ReduxAction) {
  const { payload } = action;
  try {
    const resetPasswordBy: string = yield select(getResetPasswordBy);
    const code: number = yield select(getVerificationCode);

    const { error, statusCode, statusText } = yield call(
      authHttpService.changePassword,
      {
        ...payload,
        resetPasswordBy,
        code,
      }
    );

    if (!error) {
      yield put(authPasswordChangeSuccess(payload));
    } else {
      let errorMessage = '';
      if (statusCode === 400) {
        errorMessage = 'Invalid field value';
      } else if (statusCode === 409) {
        errorMessage = 'Verification code does not match';
      } else {
        errorMessage = `${statusCode} ${statusText}`;
      }
      yield put(authPasswordChangeFail(errorMessage));
    }
  } catch (error) {
    yield put(authPasswordChangeFail(error.toString()));
  }
}

export function* authLoginRequestSaga() {
  yield takeLatest(AUTH_LOGIN_REQUEST, authLoginRequestWorker);
}

export function* authMeRequestSaga() {
  yield takeLatest(AUTH_ME_REQUEST, authMeRequestWorker);
}

export function* authLogoutRequestSaga() {
  yield takeLatest(AUTH_LOGOUT_REQUEST, authLogoutRequestWorker);
}

export function* authPasswordForgotRequestSaga() {
  yield takeLatest(
    AUTH_PASSWORD_FORGOT_REQUEST,
    authPasswordForgotRequestWorker
  );
}

export function* authVerifyCodeSaga() {
  yield takeLatest(
    AUTH_VERIFICATION_CODE_VERIFY_REQUEST,
    authVerifyCodeRequestWorker
  );
}

export function* authChangePasswordSaga() {
  yield takeLatest(
    AUTH_PASSWORD_CHANGE_REQUEST,
    authChangePasswordRequestWorker
  );
}
