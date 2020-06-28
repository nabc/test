import api from 'api';

export const getEmployees = () => {
  return api.get('v1/employees');
};
