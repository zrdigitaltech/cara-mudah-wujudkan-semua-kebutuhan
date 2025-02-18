import { actionType } from '@/redux/action/featured-projects/type';

// Data Json
import DataFeaturedProjects from './data-featured-projects.json';

// Read
export const getListFeaturedProjects = () => {
  return async (dispatch) => {
    dispatch(saveListFeaturedProjects(DataFeaturedProjects));
  };
};

// Action to save the list of FeaturedProjects
export const saveListFeaturedProjects = (payload) => {
  return {
    type: actionType.loadFeaturedProjects,
    payload: payload
  };
};
