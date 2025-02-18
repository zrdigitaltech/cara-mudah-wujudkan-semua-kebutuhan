import { initialState } from '@/redux/action/insuranseType/state';
import { actionType } from '@/redux/action/insuranseType/type';

export const insuranseTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadInsuranseType:
      state = {
        ...state,
        insuranseTypeList: action.payload
      };
      return state;
    case actionType.loadInsuranseTypeResetData:
      return initialState;
    default:
      return state;
  }
};

export default insuranseTypeReducer;
