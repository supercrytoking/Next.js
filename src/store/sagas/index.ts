import { all, spawn, call } from 'redux-saga/effects';

import {
  authChangePasswordSaga,
  authLoginRequestSaga,
  authLogoutRequestSaga,
  authMeRequestSaga,
  authPasswordForgotRequestSaga,
  authVerifyCodeSaga,
} from './auth';

import { udGetAllEmployeesForUserDirectoryRequestSaga } from './directory';

import { authSamlLoginRequestSaga } from './authSaml';

import { appsFetchAllRequestSaga, appsFetchAppNameRequestSaga } from './apps';

export default function* rootSaga() {
  // Auth sagas
  const authSagas = [
    authLoginRequestSaga,
    authMeRequestSaga,
    authLogoutRequestSaga,
    authPasswordForgotRequestSaga,
    authVerifyCodeSaga,
    authChangePasswordSaga,
  ];

  const authSamlSagas = [authSamlLoginRequestSaga];

  // Sagas for directory

  const directorySaga = [udGetAllEmployeesForUserDirectoryRequestSaga];

  // applications
  const appsSagas = [appsFetchAllRequestSaga, appsFetchAppNameRequestSaga];

  // Final Sagas merged
  const sagas = [
    ...authSagas,
    ...directorySaga,
    ...authSamlSagas,
    ...appsSagas,
  ];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
