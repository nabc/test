import * as fromActions from './actions';
import { EmployeeState } from './types';

const initialState: EmployeeState = {
  loading: false,
  loaded: false,
  errorMsg: '',
  list: [],
  compareListIDs: [],
};

export const employeeReducer = (state = initialState, action: fromActions.Actions) => {
  switch (action.type) {
    case fromActions.ActionTypes.GetEmployeeList:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case fromActions.ActionTypes.GetEmployeeListFail:
      return {
        ...state,
        loading: false,
        loaded: false,
        errorMsg: action.errorMessage,
      };
    case fromActions.ActionTypes.GetEmployeeListSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        errorMsg: '',
        list: action.data,
        compareList: [],
      };
    }
    case fromActions.ActionTypes.ToggleCompare: {
      return {
        ...state,
        compareListIDs: state.compareListIDs.includes(action.id)
          ? state.compareListIDs.filter((id) => id !== action.id)
          : state.compareListIDs.length < 4
          ? [...state.compareListIDs, action.id]
          : state.compareListIDs,
      };
    }
    default:
      return state;
  }
};
