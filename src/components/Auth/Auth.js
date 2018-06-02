import React, { Component } from 'react';
import Header from '../Header/Header';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { Tabs, Tab } from 'material-ui';
import classes from './Auth.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Spinner from '../UI/Spinner/Spinner';

class Auth extends Component {
   state = { email: '', password: '', error: '', isLoading: false };

   

   handleSignup = (e) => {
      this.setState({ isLoading: true })                  
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
      this.setState({ isLoading: true })            
      const { email, password } = this.state;
      this.props.login(
         email, password,
         () => {
            this.changeLoginStatus();
            this.props.loadData();
         },
         (error) => {
            this.setState({ error });
         }
      );
      // loading info user saved 
      // this.props.loadData();
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
      // render spinner
      let spinner;
      this.state.isLoading ? spinner = <Spinner /> : spinner = null;
      
      return(
         <div>
            <Header hideMenuLeftIcon={true} />
            <Tabs
               className={classes.tabContainer} >
               <Tab label="Login" buttonStyle={{ backgroundColor: '#88ea98' }} >
                  <Input value={this.state.email} hintText="Email" floatingLabelText="Email" onChange={e => this.setState({ email: e.target.value })} />
                  {emailErrorMessage}
                  <Input value={this.state.password} hintText="Password" floatingLabelText="Password" type="password" onChange={e=>this.setState({ password: e.target.value})} />
                  {passwordErrorMessage}
                  { spinner }                  
                  <Button label='Login' type="submit" fullWidth backgroundColor="#88ea98" onClick={e => this.handleLogin(e)} />
               </Tab>
               <Tab label="Signup" buttonStyle={{ backgroundColor: '#88ea98' }} >
                  <Input value={this.state.email} hintText="Email" floatingLabelText="Email" onChange={e => this.setState({ email: e.target.value })} />
                  {emailErrorMessage}
                  <Input value={this.state.password} hintText="Password" floatingLabelText="Password" type="password" onChange={e=>this.setState({ password: e.target.value})} />
                  {passwordErrorMessage}
                  { spinner }                  
                  <Button label='Signup' type="submit" fullWidth backgroundColor="#88ea98" onClick={e => this.handleSignup(e)} />
               </Tab>
            </Tabs>
         </div>
      );
   }
}

export default connect(null, actions)(Auth);