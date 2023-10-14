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

	setCounter = (e)=>{
		this.setState({count: e.target.value})
	}

	render(){
		return (
			<div className="container">
				<div className="counter__body">
					<div className="counter__header">{this.state.count}</div>
					<button className="counter__button control" onClick={this.increaseCounter}>Tap</button>
					<input className="counter__input control" onInput={this.setCounter} value={this.state.count}></input>
				</div>
			</div>
		)
	}
}

export default Counter