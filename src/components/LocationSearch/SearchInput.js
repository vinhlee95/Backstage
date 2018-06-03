import React, { Component } from 'react'
import Input from '../UI/Input/Input';

export default class AddressAutocomplete extends Component {
  state = {
    value: this.props.value || '',
    location: {
      lat: '',
      lng: '',
    }
  }

  componentDidMount () {
    const input = document.getElementById('addressAutocompleteField')
    const options = {
      componentRestrictions: {country: 'fi'},
      types: ['address']
    }
    const geoAutocomplete = new window.google.maps.places.Autocomplete((input), options)
    geoAutocomplete.addListener('place_changed', () => {
      const selectedPlace = geoAutocomplete.getPlace()
      // console.log(selectedPlace.geometry.location.lat())      
      const componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
      }
      // Get each component of the address from the place details
      // and fill the corresponding field on the form.
      let selectedSuggest = {}
      for (let addressComponent of selectedPlace.address_components) {
        const addressType = addressComponent.types[0]
        if (componentForm[addressType]) {
          selectedSuggest[addressType] = addressComponent[componentForm[addressType]]
        }
      }
      // input.value = selectedPlace.name // Code injection risk (check doc)
      if(!selectedSuggest.street_number) {
        selectedSuggest.street_number = '';
      }
      input.value = `${selectedSuggest.route} ${selectedSuggest.street_number}, ${selectedSuggest.locality}`
      const locationInLatLng = selectedPlace.geometry.location;
      //changeState
      this.setState({
        location: {
          lat: locationInLatLng.lat(),
          lng: locationInLatLng.lng()
        }
      });
      this.props.handleSelectLocation(this.state.location);
    })
  }

  _handleChange = (event, value) => this.setState({ value })

  render () {
    // console.log(this.state.location)
    return (
      <Input
        id='addressAutocompleteField'
        floatingLabelText={this.props.placeholder}
        hintText={this.props.placeholder}
        value={this.state.value}
        onChange={this._handleChange}
        placeholder=''
      />
    )
  }
}