import { actionType } from '@/redux/action/services/type';

// Data Json
import DataServices from './data-services.json';

// Read
export const getListServices = () => {
  return async (dispatch) => {
    dispatch(saveListServices(DataServices));
  };
};

// Action to save the list of services
export const saveListServices = (payload) => {
  return {
    type: actionType.loadServices,
    payload: payload
  };
};
