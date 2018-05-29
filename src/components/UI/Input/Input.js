import React from 'react';
import TextField from 'material-ui/TextField';
import { green100 } from 'material-ui/styles/colors';

const Input = ({hintText, floatingLabelText, type, id, onChange }) => {
   return(
      <TextField
         id={id}
         hintText={hintText}
         floatingLabelText = {floatingLabelText}
         type={type}
         style={{marginRight: 20}}
         floatingLabelStyle={styles.floatingLabelStyle}
         underlineFocusStyle={styles.underlineFocusStyle}
         underlineStyle={styles.underlineStyle}
         inputStyle={{ marginTop: 10}}
         onChange={onChange}
         placeholder=""
         fullWidth
      />
   );
}

const styles = {
   floatingLabelStyle: {
      color: green100,
   },
   underlineStyle: {
      borderColor: green100,
   },
   underlineFocusStyle: {
      borderColor: green100,
   }
}

export default Input;