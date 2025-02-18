import { actionType } from '@/redux/action/floating-whatsapp/type';

// Data Json
import DataFloatingWhatsapp from './data-floating-whatsapp.json';

// Read
export const getListFloatingWhatsapp = () => {
  return async (dispatch) => {
    dispatch(saveListFloatingWhatsapp(DataFloatingWhatsapp[0]));
  };
};

// Action to save the list of floating whatsapp
export const saveListFloatingWhatsapp = (payload) => {
  return {
    type: actionType.loadFloatingWhatsapp,
    payload: payload
  };
};
