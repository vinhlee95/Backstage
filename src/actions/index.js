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

export const login = (email, password, callback, handleError) => async (dispatch) => {
   console.log('LOGGING IN');
   try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log(`User with email ${email} is logging in`);
      callback();
      dispatch({
         type: SIGNUP,
         payload: firebase.auth().currentUser.email
      })
   } catch(error) {
      handleError(error);
   }
}

export const signout = (callback) => async (dispatch) => {
   try {
      await firebase.auth().signOut();
      console.log('User is signing out');
      dispatch({
         type: 'SIGN_OUT'
      });
      callback();
   } catch(error) {
      console.log(error);
   }
}