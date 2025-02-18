import axios from 'axios';

// creator.js
import { actionType } from '@/redux/action/maxPencairan/type';

// Read
export const getListMaxPencairan = (props) => {
  const { group_object, brand_id, model_id, year_id, area_id, insurance_type_id } = props;

  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('group_object', group_object);
      formData.append('brand_id', brand_id);
      formData.append('model_id', model_id);
      formData.append('year_id', year_id);
      formData.append('area_id', area_id);
      formData.append('insurance_type_id', insurance_type_id);

      const proxyUrl = process.env.NEXT_PUBLIC_DOMAIN_PROXY;
      const domainApi = process.env.NEXT_PUBLIC_DOMAIN_API;

      const response = await axios.post(proxyUrl + domainApi + '/Api/getMaxPencairan', formData);
      dispatch(saveListMaxPencairan(response?.data));
    } catch (error) {
      console.error(`Error fetching ${'/Api/getMaxPencairan'}:`, error);
    }
  };
};

export const resetMaxPencairanList = () => {
  return {
    type: actionType.loadMaxPencairanResetData
  };
};

// Action to save the list of maxPencairan
export const saveListMaxPencairan = (payload) => {
  return {
    type: actionType.loadMaxPencairan,
    payload: payload
  };
};
