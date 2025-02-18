import { actionType } from '@/redux/action/team/type';

// Data Json
import DataTeam from './data-team.json';

// Read
export const getListTeam = () => {
  return async (dispatch) => {
    dispatch(saveListTeam(DataTeam));
  };
};

// Action to save the list of Team
export const saveListTeam = (payload) => {
  return {
    type: actionType.loadTeam,
    payload: payload
  };
};
