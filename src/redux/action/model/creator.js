import axios from 'axios';

// creator.js
import { actionType } from '@/redux/action/model/type';

// Read
export const getListModel = (brand, selectedTab) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('brand', brand);
      formData.append('vehicle_type', selectedTab === 'motor' ? 3 : 1);

      const proxyUrl = process.env.NEXT_PUBLIC_DOMAIN_PROXY;
      const domainApi = process.env.NEXT_PUBLIC_DOMAIN_API;

      const response = await axios.post(proxyUrl + domainApi + '/Api/getModels', formData);
      dispatch(saveListModel(response?.data));
    } catch (error) {
      console.error(`Error fetching ${'/Api/getModels'}:`, error);
    }
  };
};

export const resetModelList = () => {
  return {
    type: actionType.loadModelResetData
  };
};

// Action to save the list of model
export const saveListModel = (payload) => {
  return {
    type: actionType.loadModel,
    payload: payload
  };
};
