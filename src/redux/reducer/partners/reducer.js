import { initialState } from '@/redux/action/partners/state';
import { actionType } from '@/redux/action/partners/type';

export const partnersReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadPartners:
      state = {
        ...state,
        partnersList: action.payload
      };
      return state;
    case actionType.loadPartnersResetData:
      return initialState;
    default:
      return state;
  }
};

export default partnersReducer;
