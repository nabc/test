import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import * as fromActions from 'store/Employee/actions';
import { EmployeeCardProps, EmployeeCardDispatchProps } from './types';
import image from 'assets/image.png';
const EmployeeCard: React.SFC<EmployeeCardProps> = ({ employeeDetails, compareListIDs, toggleCompare }) => {
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const isComparing = compareListIDs.includes(employeeDetails.id);
  return (
    <div
      className="employee__card"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      {isMouseOver && (
        <React.Fragment>
          <div className="employee__card__overlay"></div>
          <span
            className={`employee__card__action${isComparing ? ' comparing' : ''}`}
            onClick={() => toggleCompare(employeeDetails.id)}
          >
            {isComparing ? 'Remove' : 'Compare'}
          </span>
        </React.Fragment>
      )}
      <img src={image} alt="employee" />
      <div className="employee__card__details">
        <span className="">
          <span className="employee__card--name">{employeeDetails.employeeName}</span>
          <span className="employee__card--age">{employeeDetails.employeeAge}</span>
        </span>
        <span className="employee__card--salary">$ {(+employeeDetails.employeeSalary).toLocaleString('en')}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<fromActions.Actions>): EmployeeCardDispatchProps => {
  return {
    toggleCompare: (id: string) => dispatch(fromActions.toggleCompare(id)),
  };
};

export default connect(null, mapDispatchToProps)(EmployeeCard);
