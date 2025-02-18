import { actionType } from '@/redux/action/pricing/type';

// Data Json
import DataPricing from './data-pricing.json';

// Read
export const getListPricing = () => {
  return async (dispatch) => {
    dispatch(saveListPricing(DataPricing));
  };
};

// Action to save the list of Pricing
export const saveListPricing = (payload) => {
  return {
    type: actionType.loadPricing,
    payload: payload
  };
};
