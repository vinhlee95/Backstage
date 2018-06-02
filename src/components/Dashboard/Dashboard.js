import React from 'react';
import firebase from 'firebase';

const DashBoard = (props) => {
   let email = null;
   if(firebase.auth().currentUser) {
      email = firebase.auth().currentUser.email;
   }
   console.log(email)
   return(
      <div>
         <h1>Welcome {email}</h1>
      </div>
   );
}

export default DashBoard;