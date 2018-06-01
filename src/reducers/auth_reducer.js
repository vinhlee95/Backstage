import { SIGNUP, SIGNOUT } from '../actions/types';

export default (state = {email: null}, action) => {
   switch(action.type) {
      case SIGNUP:
         return { email: action.payload };
      case SIGNOUT:
      console.log(action.payload)
         return { email: action.payload};

      default:
         return state;
   }
}