import { takeLatest } from 'redux-saga/effects';

import { ActionTypes } from './actions';
import * as fromForm from './effects';

export const employeeWatcherSaga = [takeLatest(ActionTypes.GetEmployeeList, fromForm.GetEmployeeListSaga)];
