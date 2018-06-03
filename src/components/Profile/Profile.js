import React, { Component } from 'react';
import classes from './Profile.css';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Input from '../UI/Input/Input';
import Map from '../Map/Map';
import RaisedButton from 'material-ui/RaisedButton';
import { green200 } from 'material-ui/styles/colors';
import DoneIcon from 'material-ui/svg-icons/action/done';
import SearchInput from '../LocationSearch/SearchInput';
import Alert from '../UI/Alert/Alert';


class Profile extends Component {
   state = {
      performanceRadius: '',
      firstName: this.props.firstName ? this.props.firstName : '',
      lastName: this.props.lastName ? this.props.lastName : '',
      isAlertShow: false,
   }

   componentWillUpdate() {
      this.props.loadData();
   }

   handleSaveInfo = () => {
      const { firstName, lastName } = this.state;
      this.props.saveData(firstName, lastName,
         () => this.setState({ isAlertShow: true })
      );
   }

   handleRequestClose = () => {
      this.setState({
         isAlertShow: false,
      });
   };


   render() {   
      console.log(this.props.history)
      console.log(firebase.auth().currentUser)
      return(
         <div className={classes.container}>
            <h1>Käyttäjätiedot:</h1>
            <section className={classes.row}>
               <Input 
                  value={this.state.firstName} 
                  hintText="Etunimi" floatingLabelText = "Etunimi" 
                  onChange={e => this.setState({ firstName: e.target.value })}/>
               <Input 
                  value={this.state.lastName}
                  hintText="Sukunimi" floatingLabelText = "Sukunimi" 
                  onChange={e => this.setState({ lastName: e.target.value })} />
            </section>

            <h1>Kotipaikka</h1>
            <section className={classes.row}>
               <SearchInput 
                  placeholder="Katuosoite"
                  handleSelectLocation={(location) => this.setState({ location })} />
               <Input hintText="Asunto" floatingLabelText="Asunto" />
            </section>

            <section className={classes.row}>
               <Input hintText="Postinumero" floatingLabelText="Postinumero" />
               <Input hintText="Paikkakunta" floatingLabelText="Paikkakunta" />
            </section>
            

            <Map
               center={this.state.location}
               zoom={14}
               performanceRadius={this.state.performanceRadius}
            />
            <Input
               hintText="Change radius (km)" floatingLabelText="Change radius (km)"
               onChange={(e) => this.setState({ performanceRadius: e.target.value })}
            />
            <RaisedButton 
               onClick={this.handleSaveInfo}
               label="Save your information" 
               backgroundColor={green200}
               icon={<DoneIcon />}
               fullWidth
               style={{
                  paddingTop: 10, paddingBottom: 10, marginBottom: 50, borderRadius: 5, backgroundColor: (green200)
               }} />
            <Alert
               isAlertShow = {this.state.isAlertShow}
               message="Successfully saved"
               autoHideDuration={3000}
               onRequestClose={this.handleRequestClose} />
         </div>
      );
   }  
}

const mapStateToProps = ({data}) => {
   return {
      firstName: data.firstName,
      lastName: data.lastName
   }
}

export default connect(mapStateToProps,actions)(Profile);