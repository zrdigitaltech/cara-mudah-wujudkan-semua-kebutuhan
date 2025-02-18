import { actionType } from '@/redux/action/header/type';

// Data Json
import DataHeader from './data-header.json';

// Read
export const getListHeader = () => {
  return async (dispatch) => {
    dispatch(saveListHeader(DataHeader[0]));
  };
};

// Action to save the list of header
export const saveListHeader = (payload) => {
  return {
    type: actionType.loadHeader,
    payload: payload
  };
};
