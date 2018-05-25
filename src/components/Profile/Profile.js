import React, { Component } from 'react';
import classes from './Profile.css';
import Input from '../UI/Input/Input';
import Map from '../Map/Map';
import RaisedButton from 'material-ui/RaisedButton';
import { green200 } from 'material-ui/styles/colors';
import DoneIcon from 'material-ui/svg-icons/action/done';
import SearchInput from '../LocationSearch/SearchInput';

class Profile extends Component {
   state = {
      performanceRadius: '',
   }

   render() {   
      return(
         <div className={classes.container}>
            <h1>Käyttäjätiedot:</h1>
            <section className={classes.row}>
               <Input hintText="Etunimi" floatingLabelText = "Etunimi" />
               <Input hintText="Sukunimi" floatingLabelText = "Sukunimi" />
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
               label="Save your information" 
               backgroundColor={green200}
               icon={<DoneIcon />}
               style={{
                  paddingTop: 10, paddingBottom: 10, marginBottom: 50, borderRadius: 5, backgroundColor: (green200), width: '90%'
               }} />
         </div>
      );
   }  
}


export default Profile;