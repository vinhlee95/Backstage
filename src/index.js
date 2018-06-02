import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import rootReducer from './reducers';
import firebase from 'firebase';

const store = createStore(rootReducer, {}, compose( applyMiddleware(thunk)));

   var config = {
      apiKey: "AIzaSyBQKxPJo3KvbF3VHobpXbQpS-yB8hdCmcg",
      authDomain: "gigs-2cb8b.firebaseapp.com",
      databaseURL: "https://gigs-2cb8b.firebaseio.com",
      projectId: "gigs-2cb8b",
      storageBucket: "",
      messagingSenderId: "936084268710"
   };
   firebase.initializeApp(config);

ReactDOM.render(
   <Provider store={store} >
      <MuiThemeProvider>
         <App />
      </MuiThemeProvider>
   </Provider>
   , document.getElementById('root'));
registerServiceWorker();
