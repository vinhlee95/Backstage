import React from "react";
import MDSpinner from "react-md-spinner";

const Spinner = (props) => {
   const style = {
      display: 'block',
      margin: '5px auto',
   }
   return (
   <div>
      <MDSpinner
         singleColor="rgb(76, 175, 80)"
         size="40"
         style={style} />
   </div>
   );
}

export default Spinner;