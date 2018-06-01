import React, { Component } from 'react';
import Header from './Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import DashBoard from './Dashboard/Dashboard';
import Profile from './Profile/Profile';
import Auth from './Auth/Auth';
import classes from './App.css';
import { connect } from 'react-redux';
import firebase from 'firebase';

const GigList = () => <h1>Gig List</h1>
const Gig = () => <h1>Your Gig</h1>
const Schedule = () => <h1>Schedule</h1>
const Performer = () => <h1>Performer</h1>
const ProductList = () => <h1>Product List</h1>
const Product = () => <h1>Product</h1>

class App extends Component {
   state = { isLogin: false }

   componentWillMount() {
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

   componentWillReceiveProps(nextProps) {

   }

   render() {
      if(!firebase.auth().currentUser || this.props.email === null) {
         return <Auth isLogin={this.state.isLogin} changeLoginStatus={() => this.setState({ isLogin: true })} />;
      }
      console.log('Login' + this.state.isLogin)
      return (
         <Router>
            <div className="App">
               <Header isLogin accountInfo={this.props.email} />

               <div className={classes.container} >
                  <div className={classes.mainNav}>
                     <Nav />
                  </div>
                  <Route exact path="/" component={DashBoard} />
                  <Route path="/gigs" component={GigList} />
                  <Route path="/gigs/:gigId" component={Gig} />
                  <Route path="/products" component={ProductList} /> 
                  <Route path="/products/:productId" component={Product} />
                  <Route path="/performers/:performerId" component={Performer} />
                  <Route path="/schedule" component={Schedule} />
                  <Route path="/profile" component={Profile} />
               </div>
            </div>
         </Router>
      );
   }
}

const mapStateToProps = ({auth}) => {
   return { email: auth.email };
};

export default connect(mapStateToProps)(App);
