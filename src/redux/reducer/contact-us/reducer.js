import { initialState } from '@/redux/action/contact-us/state';
import { actionType } from '@/redux/action/contact-us/type';

export const contactUsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadContactUs:
      state = {
        ...state,
        contactUsList: action.payload
      };
      return state;
    case actionType.loadContactUsResetData:
      return initialState;
    default:
      return state;
  }
};

export default contactUsReducer;
