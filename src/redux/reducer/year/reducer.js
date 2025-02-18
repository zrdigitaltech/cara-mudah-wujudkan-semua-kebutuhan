import { initialState } from '@/redux/action/year/state';
import { actionType } from '@/redux/action/year/type';

export const yearReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadYear:
      state = {
        ...state,
        yearList: action.payload
      };
      return state;
    case actionType.loadYearResetData:
      state = {
        ...state,
        yearList: []
      };
      return state;
    default:
      return state;
  }
};

export default yearReducer;
