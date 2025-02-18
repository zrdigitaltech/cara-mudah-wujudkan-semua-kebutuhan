import { initialState } from '@/redux/action/featured-projects/state';
import { actionType } from '@/redux/action/featured-projects/type';

export const featuredProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadFeaturedProjects:
      state = {
        ...state,
        featuredProjectsList: action.payload
      };
      return state;
    case actionType.loadFeaturedProjectsResetData:
      return initialState;
    default:
      return state;
  }
};

export default featuredProjectsReducer;
