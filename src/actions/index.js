import { LOGIN, SIGNUP } from './types';
import firebase from 'firebase';

export const signup = (email, password, callback, handleError) => async (dispatch) => {
   console.log('CREATING ACCCOUNT')
   try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(`A new user with email: ${email} has been created `)
      callback();
      dispatch({
         type: SIGNUP,
         payload: firebase.auth().currentUser.email
      });
   } catch(error) {
      handleError(error);
   }
}