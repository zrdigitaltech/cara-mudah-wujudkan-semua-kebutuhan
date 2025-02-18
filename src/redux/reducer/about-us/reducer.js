import { initialState } from '@/redux/action/about-us/state';
import { actionType } from '@/redux/action/about-us/type';

export const aboutUsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadAboutUs:
      state = {
        ...state,
        aboutUsList: action.payload
      };
      return state;
    case actionType.loadAboutUsResetData:
      return initialState;
    default:
      return state;
  }
};

export default aboutUsReducer;
