import { initialState } from '@/redux/action/header/state';
import { actionType } from '@/redux/action/header/type';

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadHeader:
      state = {
        ...state,
        headerList: action.payload
      };
      return state;
    case actionType.loadHeaderResetData:
      return initialState;
    default:
      return state;
  }
};

export default headerReducer;
