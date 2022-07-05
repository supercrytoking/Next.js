import { takeLatest, put, call } from 'redux-saga/effects';

import {
  APPS_FETCH_ALL_REQUEST,
  APPS_FETCH_APP_NAME_REQUEST,
} from '../actions/types';
import ApplicationsService from '../../services/ApplicationsService';
import { ReduxAction } from '../../types/common';

import {
  appsFetchAllFailAction,
  appsFetchAllSuccessAction,
  appsFetchAppNameFailAction,
  appsFetchAppNameSuccessAction,
} from '../actions/apps';

const appsHttpService = new ApplicationsService();

function* appsFetchAllRequestWorker(action: ReduxAction) {
  const { payload } = action;
  try {
    const { error, data, statusCode, statusText } = yield call(
      appsHttpService.findAllApplications,
      payload
    );

    if (!error) {
      yield put(appsFetchAllSuccessAction(data));
    } else {
      const errorMessage =
        typeof data === 'string' ? data : `${statusCode} ${statusText}`;

      yield put(appsFetchAllFailAction(errorMessage));
    }
  } catch (err) {
    yield put(appsFetchAllFailAction(err));
  }
}

function* appsFetchAppNameRequestWorker(action: ReduxAction) {
  const { payload } = action;
  try {
    const { error, data, statusCode, statusText } = yield call(
      appsHttpService.getApplicationName,
      payload
    );

    if (!error) {
      yield put(appsFetchAppNameSuccessAction(data));
    } else {
      const errorMessage =
        typeof data === 'string' ? data : `${statusCode} ${statusText}`;

      yield put(appsFetchAppNameFailAction(errorMessage));
    }
  } catch (err) {
    yield put(appsFetchAppNameFailAction(err));
  }
}

// Sagas
export function* appsFetchAllRequestSaga() {
  yield takeLatest(APPS_FETCH_ALL_REQUEST, appsFetchAllRequestWorker);
}

export function* appsFetchAppNameRequestSaga() {
  yield takeLatest(APPS_FETCH_APP_NAME_REQUEST, appsFetchAppNameRequestWorker);
}
