import { AxiosResponse } from 'axios';
import { EmployeeModel } from './types';

export type getListFn = () => Promise<AxiosResponse<any>>;

export enum ActionTypes {
  GetEmployeeList = '[Employee] GetEmployeeList',
  GetEmployeeListFail = '[Employee] GetEmployeeListFail',
  GetEmployeeListSuccess = '[Employee] GetEmployeeListSuccess',
  ToggleCompare = '[Employee] ToggleCompare',
}

export interface GetEmployeeList {
  readonly type: ActionTypes.GetEmployeeList;
  fn: getListFn;
}

export interface GetEmployeeListFail {
  readonly type: ActionTypes.GetEmployeeListFail;
  errorMessage: string;
}

export interface GetEmployeeListSuccess {
  readonly type: ActionTypes.GetEmployeeListSuccess;
  data: EmployeeModel[];
}

export interface ToggleCompare {
  readonly type: ActionTypes.ToggleCompare;
  id: string;
}

export type Actions = GetEmployeeList | GetEmployeeListFail | GetEmployeeListSuccess  | ToggleCompare;

export const getEmployeeList = (fn: getListFn): GetEmployeeList => ({
  type: ActionTypes.GetEmployeeList,
  fn,
});

export const getEmployeeListFail = (errorMessage: string): GetEmployeeListFail => ({
  type: ActionTypes.GetEmployeeListFail,
  errorMessage,
});

export const getEmployeeListSuccess = (data: EmployeeModel[]): GetEmployeeListSuccess => ({
  type: ActionTypes.GetEmployeeListSuccess,
  data,
});

export const toggleCompare = (id: string): ToggleCompare => ({
  type: ActionTypes.ToggleCompare,
  id,
});
