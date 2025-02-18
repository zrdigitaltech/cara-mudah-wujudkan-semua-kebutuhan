import { initialState } from '@/redux/action/area/state';
import { actionType } from '@/redux/action/area/type';

export const areaReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadArea:
      state = {
        ...state,
        areaList: action.payload
      };
      return state;
    case actionType.loadAreaResetData:
      return initialState;
    default:
      return state;
  }
};

export default areaReducer;
