import React from 'react';
import AppBar from 'material-ui/AppBar';
import AccountButton from '../UI/AccountButton/AccountButton';
import MenuIcon from '../UI/MenuIcon/MenuIcon';
import classes from './Header.css';

const Header = (props) => {
   let accountButton;
   if(props.isLogin) {
      accountButton = <AccountButton accountInfo={props.accountInfo} />
   } else {
      accountButton = null;
   }
   return(
      <div>
         <AppBar  
            title="Gigle Backstage"
            iconElementRight={accountButton}
            iconElementLeft={<MenuIcon />}
            className={classes.header}
         >
         </AppBar>
      </div>

   );
}

export default Header;