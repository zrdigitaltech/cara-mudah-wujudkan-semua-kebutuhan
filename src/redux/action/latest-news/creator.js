import { actionType } from '@/redux/action/latest-news/type';

// Data Json
import DataLatestNews from './data-latest-news.json';

// Read
export const getListLatestNews = () => {
  return async (dispatch) => {
    dispatch(saveListLatestNews(DataLatestNews));
  };
};

// Action to save the list of LatestNews
export const saveListLatestNews = (payload) => {
  return {
    type: actionType.loadLatestNews,
    payload: payload
  };
};
