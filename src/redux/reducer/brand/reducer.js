import { initialState } from '@/redux/action/brand/state';
import { actionType } from '@/redux/action/brand/type';

export const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadBrand:
      state = {
        ...state,
        brandList: action.payload
      };
      return state;
    case actionType.loadBrandResetData:
      state = {
        ...state,
        brandList: []
      };
      return state;
    default:
      return state;
  }
};

export default brandReducer;
