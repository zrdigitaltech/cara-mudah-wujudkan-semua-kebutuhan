import { initialState } from '@/redux/action/bidang-bisnis/state';
import { actionType } from '@/redux/action/bidang-bisnis/type';

export const bidangBisnisReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadBidangBisnis:
      state = {
        ...state,
        bidangBisnisList: action.payload
      };
      return state;
    case actionType.loadBidangBisnisResetData:
      return initialState;
    default:
      return state;
  }
};

export default bidangBisnisReducer;
