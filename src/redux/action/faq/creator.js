import { actionType } from '@/redux/action/faq/type';

// Data Json
import DataFaq from './data-faq.json';

// Read
export const getListFaq = () => {
  return async (dispatch) => {
    dispatch(saveListFaq(DataFaq));
  };
};

// Action to save the list of Faq
export const saveListFaq = (payload) => {
  return {
    type: actionType.loadFaq,
    payload: payload
  };
};
