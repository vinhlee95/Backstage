import React from 'react';
import css from './Map.css';

export default class Circle extends React.Component {
	constructor(props){
		super(props);
		this.startDrag=this.startDrag.bind(this);
	}
	
	startDrag(){
		this.onMouseMove=(e)=>{
			console.log('Mouse Moved:',e)
		}
	}
	
	render(){
		let radius = this.props.radius/this.props.metersPerPx;
		return(
				<svg 
					height={radius*2+2} 
					width={radius*2+2} 
					className={css.circle} 
					style={{transform:'translate(-50%,-50%)'}}
					onMouseDown={this.startDrag}
				>
				 	<circle cx={radius+1} cy={radius+1} r={radius} stroke="#86b554" strokeWidth="2" fill="#86b55440" />
				 </svg>
		);
		
	}
}
