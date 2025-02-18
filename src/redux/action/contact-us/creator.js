// creator.js
import { actionType } from '@/redux/action/contact-us/type';

// Data Json
import DataContactUs from './data-contact-us.json';

// Read
export const getListContactUs = () => {
  return async (dispatch) => {
    dispatch(saveListContactUs(DataContactUs[0]));
  };
};

// Action to save the list of contact us
export const saveListContactUs = (payload) => {
  return {
    type: actionType.loadContactUs,
    payload: payload
  };
};
