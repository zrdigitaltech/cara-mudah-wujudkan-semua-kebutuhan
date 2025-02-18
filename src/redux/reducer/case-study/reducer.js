import { initialState } from '@/redux/action/case-study/state';
import { actionType } from '@/redux/action/case-study/type';

export const caseStudyReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadCaseStudy:
      state = {
        ...state,
        caseStudyList: action.payload
      };
      return state;
    case actionType.loadCaseStudyResetData:
      return initialState;
    default:
      return state;
  }
};

export default caseStudyReducer;
