import {
   SIGNUP,
   SIGNOUT
} from './types';
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
   } catch (error) {
      handleError(error);
   }
}

export const login = (email, password, callback, handleError) => async (dispatch) => {
   console.log('LOGGING IN');
   try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const {uid} = firebase.auth().currentUser;
      console.log(`User with email ${email} is logging in. The UID is ${uid}`);
      callback();
      dispatch({
         type: SIGNUP,
         payload: firebase.auth().currentUser.email
      })
   } catch (error) {
      handleError(error);
   }
}

export const signout = () => async (dispatch) => {
   try {
      await firebase.auth().signOut();
      dispatch({
         type: 'SIGN_OUT',
         payload: firebase.auth().currentUser
      });
   } catch (error) {
      console.log(error);
   }
}