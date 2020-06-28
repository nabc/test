import { EmployeeModel } from 'store/Employee';

export type EmployeesWrapperProps = EmployeesStateProps & EmployeesDispatchProps;

export interface EmployeesStateProps {
  loading: boolean;
  loaded: boolean;
  errorMsg: string;
  list: EmployeeModel[];
  compareListIDs: string[];
}

export interface EmployeesDispatchProps {
  getList: () => void;
}

export interface EmployeeCardDispatchProps {
  toggleCompare: (id: string) => void;
}

export interface EmployeeCardOwnProps {
  employeeDetails: EmployeeModel;
  compareListIDs: string[];
}

export type EmployeeCardProps = EmployeeCardDispatchProps & EmployeeCardOwnProps;

export interface CompareEmployeesProps {
  idList: string[];
  employeeList: EmployeeModel[];
}
