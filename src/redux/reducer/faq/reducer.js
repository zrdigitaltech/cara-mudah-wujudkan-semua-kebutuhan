import { initialState } from '@/redux/action/faq/state';
import { actionType } from '@/redux/action/faq/type';

export const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadFaq:
      state = {
        ...state,
        faqList: action.payload
      };
      return state;
    case actionType.loadFaqResetData:
      return initialState;
    default:
      return state;
  }
};

export default faqReducer;
