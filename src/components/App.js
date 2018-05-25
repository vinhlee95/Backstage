import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Header from './Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Profile from './Profile/Profile';
import classes from './App.css';

const Dashboard = () => <h1>Dashboard</h1>
const GigList = () => <h1>Gig List</h1>
const Gig = () => <h1>Your Gig</h1>
const Schedule = () => <h1>Schedule</h1>
const Performer = () => <h1>Performer</h1>
const ProductList = () => <h1>Product List</h1>
const Product = () => <h1>Product</h1>

class App extends Component {
   render() {
      return (
         <Router>
            <div className="App">
               <Header />
               <div className={classes.container} >
                  <div className={classes.mainNav}>
                     <Nav />
                  </div>
                  <Route exact path="/" component={Dashboard} />
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

export default App;
