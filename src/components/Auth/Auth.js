import React, { Component } from 'react';
import Header from '../Header/Header';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { Tabs, Tab } from 'material-ui';
import classes from './Auth.css';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Auth extends Component {
   state = { email: '', password: '', error: '' };

   

   handleSignup = (e) => {
      const { email, password } = this.state;
      this.props.signup(
         email, password, 
         () => {this.changeLoginStatus()},
         (error) => {
            this.setState({ error });
         },
      );
   }

   handleLogin = (e) => {
      const { email, password } = this.state;
      this.props.login(
         email, password,
         () => this.changeLoginStatus(),
         (error) => {
            this.setState({ error });
         }
      );
   }

   changeLoginStatus = () => {
      this.props.changeLoginStatus();
   }

   render() {
      // diaplay error message
      let emailErrorMessage = null;
      let passwordErrorMessage = null;
      const { error } = this.state;
      switch(error.code) {
         case 'auth/invalid-email':
         case 'auth/email-already-in-use':         
         emailErrorMessage = <p className={classes.errorMessage}>{error.message}</p>;
         break;

         case 'auth/weak-password':
         passwordErrorMessage = <p className={classes.errorMessage}>{error.message}</p>;
         break;

         default:
      }
      
      return(
         <div>
            <Header hideMenuLeftIcon={true} />
            <Tabs
               className={classes.tabContainer} >
               <Tab label="Login" buttonStyle={{ backgroundColor: '#88ea98' }} >
                  <Input hintText="Email" floatingLabelText="Email" onChange={e => this.setState({ email: e.target.value })} />
                  {emailErrorMessage}
                  <Input hintText="Password" floatingLabelText="Password" type="password" onChange={e=>this.setState({ password: e.target.value})} />
                  {passwordErrorMessage}
                  <Button label='Login' fullWidth backgroundColor="#88ea98" onClick={e => this.handleLogin(e)} />
               </Tab>
               <Tab label="Signup" buttonStyle={{ backgroundColor: '#88ea98' }} >
                  <Input hintText="Email" floatingLabelText="Email" onChange={e => this.setState({ email: e.target.value })} />
                  {emailErrorMessage}
                  <Input hintText="Password" floatingLabelText="Password" type="password" onChange={e=>this.setState({ password: e.target.value})} />
                  {passwordErrorMessage}
                  <Button label='Signup' fullWidth backgroundColor="#88ea98" onClick={e => this.handleSignup(e)} />
               </Tab>
            </Tabs>
         </div>
      );
   }
}

export default connect(null, actions)(Auth);