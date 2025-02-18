import axios from 'axios';

// creator.js
import { actionType } from '@/redux/action/year/type';

// Read
export const getListYear = (areas, brands) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('area', areas);
      formData.append('model', brands);

      const proxyUrl = process.env.NEXT_PUBLIC_DOMAIN_PROXY;
      const domainApi = process.env.NEXT_PUBLIC_DOMAIN_API;

      const response = await axios.post(proxyUrl + domainApi + '/Api/getYears', formData);
      dispatch(saveListYear(response?.data));
    } catch (error) {
      console.error(`Error fetching ${'/Api/getYears'}:`, error);
    }
  };
};

export const resetYearList = () => {
  return {
    type: actionType.loadYearResetData
  };
};

// Action to save the list of year
export const saveListYear = (payload) => {
  return {
    type: actionType.loadYear,
    payload: payload
  };
};
