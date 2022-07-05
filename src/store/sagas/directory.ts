import { ReduxAction } from 'src/types/common';
import {
  allEmployeesErrorAction,
  allEmployeesSuccessAction,
} from '../actions/directory';
import DirectoryService from '../../services/DirectoryService';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ALL_EMPLOYEES_REQUEST } from '../actions/types';

const udHttpService = new DirectoryService();

function* udGetAllEmployeesForUserDirectory(action: ReduxAction) {
  const { payload } = action;
  try {
    const { error, data } = yield call(
      udHttpService.fetchAllEmployeesForUserDirectory,
      payload
    );

    if (!error) {
      yield put(allEmployeesSuccessAction(data));
    } else {
      // error
    }
  } catch (err) {
    yield put(allEmployeesErrorAction(err));
  }
}

export function* udGetAllEmployeesForUserDirectoryRequestSaga() {
  yield takeLatest(ALL_EMPLOYEES_REQUEST, udGetAllEmployeesForUserDirectory);
}
