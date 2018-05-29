import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, compose( applyMiddleware(thunk)));

ReactDOM.render(
   <Provider store={store} >
      <MuiThemeProvider><App /></MuiThemeProvider>
   </Provider>
   , document.getElementById('root'));
registerServiceWorker();
