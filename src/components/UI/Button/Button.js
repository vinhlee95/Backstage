import React from 'react';
import { RaisedButton } from 'material-ui';

const Button = ({
      label,
      fullWidth,
      backgroundColor,
      onClick
   }) => {
   return(
      <RaisedButton
         onClick={onClick}
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