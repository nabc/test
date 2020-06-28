import React, { Dispatch } from 'react';
import './_Employee.scss';
import { connect } from 'react-redux';
import { StoreState } from 'store';
import * as fromActions from 'store/Employee/actions';
import { EmployeesStateProps, EmployeesWrapperProps, EmployeesDispatchProps } from './types';
import { getEmployees } from 'api/App.api';
import { EmployeeModel } from 'store/Employee';
import EmployeeCard from './EmployeeCard';
import CompareEmployees from './CompareEmployees';

class EmployeesWrapper extends React.Component<EmployeesWrapperProps> {
  constructor(props: EmployeesWrapperProps) {
    super(props);
    props.getList();
  }

  render() {
    return (
      <div className="employee">
        {!this.props.loading && !this.props.loaded && this.props.errorMsg.length > 0 && (
          <h1 className="error">{this.props.errorMsg}</h1>
        )}

        {this.props.loading && <span>Loading...</span>}
        {!this.props.loading &&
          this.props.loaded &&
          (this.props.list.length === 0 ? (
            <span>List is Empty!!</span>
          ) : (
            <React.Fragment>
              <div className="employee__list">
                {this.props.list.map((employee: EmployeeModel) => (
                  <EmployeeCard
                    key={employee.id}
                    employeeDetails={employee}
                    compareListIDs={this.props.compareListIDs}
                  />
                ))}
              </div>
              <div className="employee__compare">
                <CompareEmployees idList={this.props.compareListIDs} employeeList={this.props.list} />
              </div>
            </React.Fragment>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): EmployeesStateProps => {
  const { employee } = state;
  return {
    loading: employee.loading,
    loaded: employee.loaded,
    errorMsg: employee.errorMsg,
    list: employee.list,
    compareListIDs: employee.compareListIDs,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<fromActions.Actions>): EmployeesDispatchProps => {
  return {
    getList: () => dispatch(fromActions.getEmployeeList(getEmployees)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesWrapper);
