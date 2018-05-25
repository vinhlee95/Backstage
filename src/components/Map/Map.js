import React,{Component} from 'react';
import GoogleMapReact, { google, map } from 'google-map-react';
import Circle from './Circle';
import css from './Map.css';

export default class Map extends Component {
	constructor(props){
		super(props);
		this.mapChanged=this.mapChanged.bind(this);
		this.state={
			zoom:11
		};
	}
	
	mapChanged(data){
		console.log('Map changed:',data);
		this.setState({ zoom: data.zoom });
	}
	
	childMouseDown(data){
		console.log('Child mouse down: ',data);
	}
	
	render(){
		
		let center = this.props.center ? this.props.center : {lat: 0, lng: 0};

		// A magic formula to convert lat + map scale to meters, straight from google: https://groups.google.com/forum/#!topic/google-maps-js-api-v3/hDRO4oHVSeM
		let metersPerPx = 156543.03392 * Math.cos(center.lat * Math.PI / 180) / Math.pow(2, this.state.zoom);

		let radius = this.props.performanceRadius ? this.props.performanceRadius * 1000 : 5000;
		return(
			<div className={css.gigleMap} >
		
				<GoogleMapReact
					defaultCenter={{ lat: 60.192059, lng: 24.945831 }}
					center={ this.props.center ? this.props.center : null }
					defaultZoom={ 11 }
					zoom={ this.state.zoom }
					onChange={this.mapChanged}
					onChildClick={this.childMouseDown}
					hoverDistance={radius}
				>
				
					<Circle 
						key={2}
						lat={center.lat}
						lng={center.lng}
						radius={4}
						metersPerPx = {1}
					/>
					
					<Circle 
						key={1}
						lat={center.lat}
						lng={center.lng}
						radius={radius}
						metersPerPx = {metersPerPx} 
					/>
				</GoogleMapReact>
		    </div>
		);
	}
}

