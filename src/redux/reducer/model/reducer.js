import { initialState } from '@/redux/action/model/state';
import { actionType } from '@/redux/action/model/type';

export const modelReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadModel:
      state = {
        ...state,
        modelList: action.payload
      };
      return state;
    case actionType.loadModelResetData:
      state = {
        ...state,
        modelList: []
      };
      return state;
    default:
      return state;
  }
};

export default modelReducer;
