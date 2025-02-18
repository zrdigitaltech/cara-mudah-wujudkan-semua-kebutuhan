import { initialState } from '@/redux/action/floating-whatsapp/state';
import { actionType } from '@/redux/action/floating-whatsapp/type';

export const floatingWhatsappReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadFloatingWhatsapp:
      state = {
        ...state,
        floatingWhatsappList: action.payload
      };
      return state;
    case actionType.loadFloatingWhatsappResetData:
      return initialState;
    default:
      return state;
  }
};

export default floatingWhatsappReducer;
