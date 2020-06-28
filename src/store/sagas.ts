import { all } from 'redux-saga/effects';
import { employeeWatcherSaga } from './Employee/sagas';

export default function* watcherSagas() {
  yield all([...employeeWatcherSaga]);
}
