import axios from 'axios';

// creator.js
import { actionType } from '@/redux/action/brand/type';

// Read
export const getListBrand = (selectedTab) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('group_object', selectedTab === 'motor' ? '001' : '002');
      formData.append('vehicle_type', selectedTab === 'motor' ? 3 : 1);

      const proxyUrl = process.env.NEXT_PUBLIC_DOMAIN_PROXY;
      const domainApi = process.env.NEXT_PUBLIC_DOMAIN_API;

      const response = await axios.post(proxyUrl + domainApi + '/Api/getBrands', formData);
      dispatch(saveListBrand(response?.data));
    } catch (error) {
      console.error(`Error fetching ${'/Api/getBrands'}}:`, error);
    }
  };
};

export const resetBrandList = () => {
  return {
    type: actionType.loadBrandResetData
  };
};

// Action to save the list of brand
export const saveListBrand = (payload) => {
  return {
    type: actionType.loadBrand,
    payload: payload
  };
};
