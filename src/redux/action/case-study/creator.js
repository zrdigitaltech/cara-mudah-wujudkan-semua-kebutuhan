import { actionType } from '@/redux/action/case-study/type';

// Data Json
import DataCaseStudy from './data-case-study.json';

// Read
export const getListCaseStudy = () => {
  return async (dispatch) => {
    dispatch(saveListCaseStudy(DataCaseStudy));
  };
};

// Action to save the list of CaseStudy
export const saveListCaseStudy = (payload) => {
  return {
    type: actionType.loadCaseStudy,
    payload: payload
  };
};
