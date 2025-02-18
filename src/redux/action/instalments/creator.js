import axios from 'axios';

// creator.js
import { actionType } from '@/redux/action/instalments/type';

// Read
export const getListInstalments = (props) => {
  const { group_object, brand_id, model_id, year_id, area_id, insurance_type_id, tenor, total } =
    props;

  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('group_object', group_object);
      formData.append('brand_id', brand_id);
      formData.append('model_id', model_id);
      formData.append('year_id', year_id);
      formData.append('area_id', area_id);
      formData.append('insurance_type_id', insurance_type_id);
      formData.append('tenor', tenor);
      formData.append('total', total);

      const proxyUrl = process.env.NEXT_PUBLIC_DOMAIN_PROXY;
      const domainApi = process.env.NEXT_PUBLIC_DOMAIN_API;

      const response = await axios.post(proxyUrl + domainApi + '/Api/getInstalments', formData);
      dispatch(saveListInstalments(response?.data));
    } catch (error) {
      console.error(`Error fetching ${'/Api/getInstalments'}:`, error);
    }
  };
};

export const resetInstalmentsList = () => {
  return {
    type: actionType.loadInstalmentsResetData
  };
};

// Action to save the list of instalments
export const saveListInstalments = (payload) => {
  return {
    type: actionType.loadInstalments,
    payload: payload
  };
};
