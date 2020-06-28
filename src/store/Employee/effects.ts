import { call, put, all } from 'redux-saga/effects';

import * as fromActions from './actions';
import { PayloadModel } from 'store/types';

export function* GetEmployeeListSaga(action: fromActions.GetEmployeeList) {
  let payload: PayloadModel;
  try {
    const response = yield call(action.fn);

    payload = response.data;

    if (payload.status === 'success') {
      yield put(fromActions.getEmployeeListSuccess(payload.data));
    } else {
      yield all([put(fromActions.getEmployeeListFail('Oops!, something went wrong'!))]);
    }
  } catch (error) {
    const errorMsg =
      error.response && typeof error.response !== 'undefined'
        ? error.response.data
          ? error.response.data.error
          : error.response.status
        : 'Oops!, something went wrong!';
    yield put(fromActions.getEmployeeListFail(errorMsg));
  }
}
