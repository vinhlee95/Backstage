import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import classes from './SearchInput.css';

class SearchInput extends React.Component {
   constructor(props) {
      super(props);  
      this.state = { address: '', location: { lat: '', lng: '' } };
   }

   handleChange = (address) => {
      this.setState({ address })
   }

   handleSelect = (address) => {
      geocodeByAddress(address)
         .then(results => getLatLng(results[0]))
         .then(({lat, lng}) => {
            const selectedLocation = { lat, lng };
            this.setState({ location: selectedLocation });
            console.log(this.state.location);
            this.props.handleSelectLocation(selectedLocation);
         })
   }
   render() {

      return (
         <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
         >
         {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <div>
               <input
                  { ...getInputProps({}) }
                  placeholder={this.props.placeholder}
                  className={classes.searchInput}
               />
               <div className={classes.autocompleteDropdown} >
                  {suggestions.map(suggestion => {
                     return (
                        <div
                           className={classes.item} 
                           {...getSuggestionItemProps(suggestion)}>
                           <span
                              className={
                                 suggestion.active 
                                 ? 
                                 classes.activeSuggestionItem
                                 :
                                 classes.suggestionItem }
                           >
                              {suggestion.description}
                           </span>
                        </div>
                     )
                  })}
               </div>
            </div>
         )}
         </PlacesAutocomplete>
      );
   }
}

export default SearchInput;