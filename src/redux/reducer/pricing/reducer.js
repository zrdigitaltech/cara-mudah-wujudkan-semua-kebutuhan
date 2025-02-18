import { initialState } from '@/redux/action/pricing/state';
import { actionType } from '@/redux/action/pricing/type';

export const pricingReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadPricing:
      state = {
        ...state,
        pricingList: action.payload
      };
      return state;
    case actionType.loadPricingResetData:
      return initialState;
    default:
      return state;
  }
};

export default pricingReducer;
