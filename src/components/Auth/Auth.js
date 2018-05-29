import React, { Component } from 'react';
import Header from '../Header/Header';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { Tabs, Tab } from 'material-ui';
import classes from './Auth.css';

class Auth extends Component {
   render() {
      return(
         <div>
            <Header hideMenuLeftIcon={true} />
            <Tabs
               className={classes.tabContainer} >
               <Tab label="Login" buttonStyle={{ backgroundColor: '#88ea98'}}>
                  <Input hintText="Email" floatingLabelText="Email" />
                  <Input hintText="Password" floatingLabelText="Password" type="password" />
                  <Input hintText="Confirm password" floatingLabelText="Confirm password" type="password" />
                  <Button label="Login" fullWidth backgroundColor="#88ea98" />
               </Tab>
               
               <Tab label="Signup"  buttonStyle={{ backgroundColor: '#88ea98'}}>
                  <p>Welcome! Gigi's job is to make the presentations as easy as possible. Let's start by creating your personal ID.</p>
                  <Input hintText="Email" floatingLabelText="Email" />
                  <Input hintText="Password" floatingLabelText="Password" type="password" />
                  <Button label="Create ID" fullWidth backgroundColor="#88ea98" />
               </Tab>
            </Tabs>
         </div>
      );
   }
}

export default Auth;