import { ReduxAction } from 'src/types/common';
import {
  ALL_EMPLOYEES_ERROR,
  ALL_EMPLOYEES_REQUEST,
  ALL_EMPLOYEES_SUCCESS,
} from './types';

export const allEmployeesRequestAction = (userId: string): ReduxAction => ({
  type: ALL_EMPLOYEES_REQUEST,
  payload: { userId },
});

export const allEmployeesSuccessAction = (allEmployees: []): ReduxAction => ({
  type: ALL_EMPLOYEES_SUCCESS,
  payload: allEmployees,
});

export const allEmployeesErrorAction = (err: Error): ReduxAction => ({
  type: ALL_EMPLOYEES_ERROR,
  payload: err,
});
