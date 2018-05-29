import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ProfileIcon from 'material-ui/svg-icons/social/person';

export default class AccountButton extends React.Component {

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
         <div>
            <RaisedButton
               onClick={this.handleClick}
               icon={<ProfileIcon />}
               label={this.props.accountInfo}
               buttonStyle={{ borderRadius: 10}}
               style={{backgroundColor: 'none'}}
            >
            </RaisedButton>
            <Popover
               open={this.state.open}
               anchorEl={this.state.anchorEl}
               anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
               targetOrigin={{horizontal: 'left', vertical: 'top'}}
               onRequestClose={this.handleRequestClose}
            >
               <Menu>
                  <MenuItem primaryText="Logout" onClick={() => alert('Are you sure to do this?')} />
               </Menu>
            </Popover>
         </div>
      );
   }
}