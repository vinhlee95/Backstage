import React from 'react';
import { RaisedButton } from 'material-ui';
import classes from './Button.css';

const Button = ({
      label,
      fullWidth,
      backgroundColor
   }) => {
   return(
      <RaisedButton
         label={label}
         fullWidth={fullWidth}
         backgroundColor={backgroundColor}
         buttonStyle={styles.button}
         style={{ marginTop: 20 }} />
   );
}

const styles = {
   button: {
      borderRadius: 5,
      height: 50,
   }
}

export default Button;