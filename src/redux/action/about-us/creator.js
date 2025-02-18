// creator.js
import { actionType } from '@/redux/action/about-us/type';

// Data Json
import DataAboutUs from './data-about-us.json';

// Read
export const getListAboutUs = () => {
  return async (dispatch) => {
    dispatch(saveListAboutUs(DataAboutUs[0]));
  };
};

// Action to save the list of area layanan
export const saveListAboutUs = (payload) => {
  return {
    type: actionType.loadAboutUs,
    payload: payload
  };
};
