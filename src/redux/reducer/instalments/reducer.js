import { initialState } from '@/redux/action/instalments/state';
import { actionType } from '@/redux/action/instalments/type';

export const instalmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadInstalments:
      state = {
        ...state,
        instalmentsList: action.payload
      };
      return state;
    case actionType.loadInstalmentsResetData:
      state = {
        ...state,
        instalmentsList: []
      };
      return state;
    default:
      return state;
  }
};

export default instalmentsReducer;
