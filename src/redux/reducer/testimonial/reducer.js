import { initialState } from '@/redux/action/testimonial/state';
import { actionType } from '@/redux/action/testimonial/type';

export const testimonialReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadTestimonial:
      state = {
        ...state,
        testimonialList: action.payload
      };
      return state;
    case actionType.loadTestimonialResetData:
      return initialState;
    default:
      return state;
  }
};

export default testimonialReducer;
