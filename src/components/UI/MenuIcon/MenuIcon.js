import React from 'react';
import Popover from 'material-ui/Popover';
import Nav from '../../Nav/Nav';
import Hamburger from 'material-ui/svg-icons/navigation/menu';
import classes from './MenuIcon.css'

export default class LoginButton extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         open: false,
      };
   }

   handleClick = (event) => {
      // This prevents ghost click.
      event.preventDefault();
      this.setState({
         open: true,
         anchorEl: event.currentTarget,
      });
   };

   handleRequestClose = () => {
      this.setState({
         open: false,
      });
   };

   render() {
      return (
         <div className={classes.menuIcon} >
            <Hamburger 
               onClick={this.handleClick}
               style={{
                  width: 50,
                  height: 50
               }} />
            <Popover
               open={this.state.open}
               anchorEl={this.state.anchorEl}
               anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
               targetOrigin={{horizontal: 'left', vertical: 'top'}}
               onRequestClose={this.handleRequestClose}
            >
               <Nav handleClickMenuItem={() => this.setState({ open: false })}/>
            </Popover>
         </div>
      );
   }
}