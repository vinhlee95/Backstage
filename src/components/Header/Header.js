import React from 'react';
import AppBar from 'material-ui/AppBar';
import AccountButton from '../UI/AccountButton/AccountButton';
import MenuIcon from '../UI/MenuIcon/MenuIcon';
import classes from './Header.css';

const Header = () => {
   return(
      <div>
         <AppBar  
            title="Gigle Backstage"
            iconElementRight={<AccountButton />}
            iconElementLeft={<MenuIcon />}
            className={classes.header}
         >
         </AppBar>
      </div>

   );
}

export default Header;