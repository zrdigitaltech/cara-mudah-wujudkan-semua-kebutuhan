import { initialState } from '@/redux/action/maxPencairan/state';
import { actionType } from '@/redux/action/maxPencairan/type';

export const maxPencairanReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadMaxPencairan:
      state = {
        ...state,
        maxPencairanList: action.payload
      };
      return state;
    case actionType.loadMaxPencairanResetData:
      state = {
        ...state,
        maxPencairanList: []
      };
      return state;
    default:
      return state;
  }
};

export default maxPencairanReducer;
