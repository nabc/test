import { combineReducers } from 'redux';
import { employeeReducer } from './Employee/reducer';
import { EmployeeState } from './Employee';

const rootReducer = () =>
  combineReducers({
    employee: employeeReducer,
  });

export interface StoreState {
  employee: EmployeeState;
}

export default rootReducer;
