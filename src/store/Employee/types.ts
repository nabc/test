export interface EmployeeState {
  loading: boolean;
  loaded: boolean;
  errorMsg: string;
  list: EmployeeModel[];
  compareListIDs: string[];
}

export interface EmployeeModel {
  id: string;
  employeeName: string;
  employeeSalary: string;
  employeeAge: string;
  profileImage: string;
}
