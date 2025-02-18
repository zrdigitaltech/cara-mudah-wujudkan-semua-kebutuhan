import { actionType } from '@/redux/action/bidang-bisnis/type';

// Data Json
import DataBidangBisnis from './data-bidang-bisnis.json';

// Read
export const getListBidangBisnis = () => {
  return async (dispatch) => {
    dispatch(saveListBidangBisnis(DataBidangBisnis));
  };
};

// Action to save the list of bidangBisnis
export const saveListBidangBisnis = (payload) => {
  return {
    type: actionType.loadBidangBisnis,
    payload: payload
  };
};
