import { initialState } from '@/redux/action/latest-news/state';
import { actionType } from '@/redux/action/latest-news/type';

export const latestNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadLatestNews:
      state = {
        ...state,
        latestNewsList: action.payload
      };
      return state;
    case actionType.loadLatestNewsResetData:
      return initialState;
    default:
      return state;
  }
};

export default latestNewsReducer;
