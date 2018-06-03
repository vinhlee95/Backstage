import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const Alert = ({isAlertShow, message, autoHideDuration, onRequestClose}) => {
   return(
      <Snackbar
         open={isAlertShow}
         message={message}
         autoHideDuration={autoHideDuration}
         onRequestClose={onRequestClose}
         contentStyle={{ backgroundColor: '#86b554' }}
         bodyStyle={{ backgroundColor: '#86b554', textAlign: 'center' }}
      />
   );
}

export default Alert;