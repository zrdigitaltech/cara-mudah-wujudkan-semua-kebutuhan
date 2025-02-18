import { actionType } from '@/redux/action/testimonial/type';

// Data Json
import DataTestimonial from './data-testimonial.json';

// Read
export const getListTestimonial = () => {
  return async (dispatch) => {
    dispatch(saveListTestimonial(DataTestimonial));
  };
};

// Action to save the list of testimonial
export const saveListTestimonial = (payload) => {
  return {
    type: actionType.loadTestimonial,
    payload: payload
  };
};
