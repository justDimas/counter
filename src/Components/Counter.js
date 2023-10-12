import React from "react";
import './counter.css'

class Counter extends React.Component{
	constructor(){
		super()
		this.state = {
			count: 0
		}
	}	

	increaseCounter = ()=>{
		this.setState(state =>({count: ++state.count}))
	}

	render(){
		return (
			<div className="container">
				<div className="counter__body">
					<div className="counter__header">{this.state.count}</div>
					<button className="counter__button" onClick={this.increaseCounter}>Tap</button>
				</div>
			</div>
		)
	}
}

export default Counter