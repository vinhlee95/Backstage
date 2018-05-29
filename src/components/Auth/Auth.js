import React, { Component } from 'react';
import Header from '../Header/Header';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { Tabs, Tab } from 'material-ui';
import classes from './Auth.css';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const data = [
   {
      label: 'login',
      backgroundColor: '#88ea98',
      buttonLabel: 'Login'
   },
   {
      label: 'signup',
      backgroundColor: '#88ea98',
      buttonLabel: 'Signup'
   },
];

class Auth extends Component {
   state = { email: '', password: '' };

   componentDidMount() {
      var config = {
         apiKey: "AIzaSyBQKxPJo3KvbF3VHobpXbQpS-yB8hdCmcg",
         authDomain: "gigs-2cb8b.firebaseapp.com",
         databaseURL: "https://gigs-2cb8b.firebaseio.com",
         projectId: "gigs-2cb8b",
         storageBucket: "",
         messagingSenderId: "936084268710"
      };
      firebase.initializeApp(config);
   }

   handleSubmit = (e, label) => {
      e.preventDefault();
      const { email, password } = this.state;
      if(label === 'signup') {
         this.handleSignup(email, password);
      }
      return this.handleSignup(email, password)
   }

   handleSignup = (email, password) => {
      this.props.signup(email, password, () => {
         this.changeLoginStatus();
      })
   }

   changeLoginStatus = () => {
      this.props.changeLoginStatus();
   }

   render() {
      let tabs;
      tabs = data.map((item, id) => {
         return (
            <Tab key={id} label={item.label} buttonStyle={{ backgroundColor: item.backgroundColor }} >
               <Input hintText="Email" floatingLabelText="Email" onChange={e => this.setState({ email: e.target.value })} />
               <Input hintText="Password" floatingLabelText="Password" type="password" onChange={e=>this.setState({ password: e.target.value})} />
               <Button label={item.buttonLabel} fullWidth backgroundColor="#88ea98" onClick={e => this.handleSubmit(e, item.buttonLabel)} />
            </Tab>
         );
      });
      return(
         <div>
            <Header hideMenuLeftIcon={true} />
            <Tabs
               className={classes.tabContainer} >
               {tabs}
            </Tabs>
         </div>
      );
   }
}

export default connect(null, actions)(Auth);