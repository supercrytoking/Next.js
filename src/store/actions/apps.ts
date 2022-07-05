import {
  APPS_FETCH_ALL_FAIL,
  APPS_FETCH_ALL_REQUEST,
  APPS_FETCH_ALL_SUCCESS,
  APPS_FETCH_APP_NAME_FAIL,
  APPS_FETCH_APP_NAME_REQUEST,
  APPS_FETCH_APP_NAME_SUCCESS,
} from './types';

import { ReduxAction } from '../../types/common';
import { Application } from '../../types/applications';

export const appsFetchAllRequestAction = (
  params?: Record<string, unknown>
): ReduxAction => ({
  type: APPS_FETCH_ALL_REQUEST,
  payload: params,
});

export const appsFetchAllSuccessAction = (
  apps: Application[]
): ReduxAction => ({
  type: APPS_FETCH_ALL_SUCCESS,
  payload: apps,
});

export const appsFetchAllFailAction = (error: any) => ({
  type: APPS_FETCH_ALL_FAIL,
  payload: error,
});

export const appsFetchAppNameRequestAction = (
  applicationId?: string
): ReduxAction => ({
  type: APPS_FETCH_APP_NAME_REQUEST,
  payload: applicationId,
});

export const appsFetchAppNameSuccessAction = (
  apps: Application[]
): ReduxAction => ({
  type: APPS_FETCH_APP_NAME_SUCCESS,
  payload: apps,
});

export const appsFetchAppNameFailAction = (error: any) => ({
  type: APPS_FETCH_APP_NAME_FAIL,
  payload: error,
});
