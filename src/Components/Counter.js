import React from "react";

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
					<button onClick={this.increaseCounter} className="counter__button">Tap</button>
				</div>
			</div>
		)
	}
}

export default Counter