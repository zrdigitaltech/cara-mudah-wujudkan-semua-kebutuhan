import axios from 'axios';

// creator.js
import { actionType } from '@/redux/action/area/type';

// Read
export const getListArea = () => {
  return async (dispatch) => {
    try {
      const proxyUrl = process.env.NEXT_PUBLIC_DOMAIN_PROXY;
      const domainApi = process.env.NEXT_PUBLIC_DOMAIN_API;
      const response = await axios.post(proxyUrl + domainApi + '/Api/getAreas');
      dispatch(saveListArea(response?.data));
    } catch (error) {
      console.error(`Error fetching ${'/Api/getAreas'}:`, error);
    }
  };
};

// Action to save the list of area
export const saveListArea = (payload) => {
  return {
    type: actionType.loadArea,
    payload: payload
  };
};
