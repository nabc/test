import React from 'react';
import { CompareEmployeesProps } from './types';
import { EmployeeModel } from 'store/Employee/types';
import EmployeeCard from './EmployeeCard';

const CompareEmployees: React.SFC<CompareEmployeesProps> = ({ idList, employeeList }) => {
  const compareList = employeeList.filter((employee: EmployeeModel) => idList.includes(employee.id));
  return (
    <React.Fragment>
      <div className="employee__list">
        {compareList.map((employee: EmployeeModel) => (
          <EmployeeCard key={employee.id} employeeDetails={employee} compareListIDs={idList} />
        ))}
      </div>
      <div className="employee__compare__details">
        <div className="employee__compare__title">
          <span>ID</span>
          <span>Name</span>
          <span>Age</span>
          <span>Salary</span>
        </div>
        {compareList.map((employee: EmployeeModel) => (
          <div key={employee.id} className="employee__compare__info">
            <span>{employee.id}</span>
            <span>{employee.employeeName}</span>
            <span>{employee.employeeAge}</span>
            <span>$ {(+employee.employeeSalary).toLocaleString('en')}</span>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default CompareEmployees;
