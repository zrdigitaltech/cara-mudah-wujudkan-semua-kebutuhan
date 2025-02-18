import { initialState } from '@/redux/action/services/state';
import { actionType } from '@/redux/action/services/type';

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadServices:
      state = {
        ...state,
        servicesList: action.payload
      };
      return state;
    case actionType.loadServicesResetData:
      return initialState;
    default:
      return state;
  }
};

export default servicesReducer;
