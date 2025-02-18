import { actionType } from '@/redux/action/partners/type';

// Data Json
import DataPartners from './data-partners.json';

// Read
export const getListPartners = () => {
  return async (dispatch) => {
    dispatch(saveListPartners(DataPartners));
  };
};

// Action to save the list of Partners
export const saveListPartners = (payload) => {
  return {
    type: actionType.loadPartners,
    payload: payload
  };
};
