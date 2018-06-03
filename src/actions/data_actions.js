import { SAVE_DATA, LOAD_DATA } from './types';
import firebase from 'firebase';

export const saveData = (firstName, lastName, callback) => async (dispatch) => {
   let database = firebase.database();
   const uid = firebase.auth().currentUser.uid;
   let userPath = database.ref(`users/${uid}`);
   await userPath.set({
      firstName,
      lastName
   });
   console.log('Data is successsfully saved ');
   dispatch({
      type: SAVE_DATA,
      payload: {
         firstName,
         lastName,
      }
   });
   callback();
}

export const loadData = () => async (dispatch) => {
   let uid = await firebase.auth().currentUser.uid;
   let userPath = firebase.database().ref(`users/${uid}`);
   userPath.on('value', (snapshot) => {
      dispatch({
         type: LOAD_DATA,
         payload: snapshot.val(),
      });
      console.log(`Data is loaded, containing: ${snapshot.val().firstName} and ${snapshot.val().lastName} `);      
   });
}

