import axios from 'axios';

// creator.js
import { actionType } from '@/redux/action/insuranseType/type';

// Read
export const getListInsuranseType = () => {
  return async (dispatch) => {
    try {
      const proxyUrl = process.env.NEXT_PUBLIC_DOMAIN_PROXY;
      const domainApi = process.env.NEXT_PUBLIC_DOMAIN_API;
      const response = await axios.post(proxyUrl + domainApi + '/Api/getInsuranseType');
      dispatch(saveListInsuranseType(response?.data));
    } catch (error) {
      console.error(`Error fetching ${'/Api/getInsuranseType'}:`, error);
    }
  };
};

// Action to save the list of insuranseType
export const saveListInsuranseType = (payload) => {
  return {
    type: actionType.loadInsuranseType,
    payload: payload
  };
};
