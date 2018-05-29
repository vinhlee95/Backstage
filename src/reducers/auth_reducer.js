import { SIGNUP } from '../actions/types';

export default (state = {}, action) => {
   switch(action.type) {
      case SIGNUP:
         return { email: action.payload };
      default:
         return state;
   }
}