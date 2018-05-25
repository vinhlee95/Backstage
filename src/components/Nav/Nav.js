import React, { Component } from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import CalendarIcon from 'material-ui/svg-icons/action/event';
import PageIcon from 'material-ui/svg-icons/social/pages';
import PersonIcon from 'material-ui/svg-icons/social/person';
import BusinessIcon from 'material-ui/svg-icons/content/next-week';
import { Link } from 'react-router-dom';
import classes from './Nav.css';

const navData = [
   {
      name: 'Keikat',
      leftIcon: <BusinessIcon />,
      path: '/'
   },
   {
      name: 'Esiintyjät ja Esitykset',
      leftIcon: <PageIcon />,
      path: '/products'
   },
   {
      name: 'Kalenteri',
      leftIcon: <CalendarIcon />,
      path: '/schedule'
   },
   {
      name: 'Omat tiedot',
      leftIcon: <PersonIcon />,
      path: '/profile'
   }
]


class Nav extends Component {

   render() {
      let onClick=null;
      let menu;
      if(this.props.handleClickMenuItem) {
         onClick = () => this.props.handleClickMenuItem();
      }
      menu = navData.map((item, index) => {
         return(
            <Link to={item.path} key={index} >
               <MenuItem
                  primaryText={item.name}
                  leftIcon={item.leftIcon}
                  className={classes.menuItem}
                  onClick={onClick}/>
            </Link>
         );
      });
      return(
         <Menu className={classes.menu} >
            {menu}
         </Menu>
      );
   }
}

export default Nav;