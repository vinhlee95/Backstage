import React from 'react';
import { connect } from 'react-redux';

const DashBoard = (props) => {
   return(
      <div>
         <h1>Welcome {props.email}</h1>
      </div>
   );
}

const mapStateToProps = ({auth}) => {
   return { email: auth.email };
};

export default connect(mapStateToProps)(DashBoard);