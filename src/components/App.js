import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Header from './Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import classes from './App.css';

const Gig = () => <h1>Gig</h1>
const Schedule = () => <h1>Schedule</h1>
const Performer = () => <h1>Performer</h1>
const Profile = () => <h1>Profile</h1>

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
                  <Route exact path="/" component={Gig} />
                  <Route path="/performer" component={Performer} />          
                  <Route path="/schedule" component={Schedule} />
                  <Route path="/profile" component={Profile} />
               </div>
            </div>
         </Router>
      );
   }
}

export default App;
