import { initialState } from '@/redux/action/team/state';
import { actionType } from '@/redux/action/team/type';

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadTeam:
      state = {
        ...state,
        teamList: action.payload
      };
      return state;
    case actionType.loadTeamResetData:
      return initialState;
    default:
      return state;
  }
};

export default teamReducer;
