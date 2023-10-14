import React from "react";
import style from './style.module.css'

class Login extends React.Component{
	constructor(){
		super()
		this.state = {
			username:'',
			password:''
		}
	}

	onFieldChange = (event)=>{
		this.setState({
			[event.target.name]:event.target.value
		})
	}

	onFormSubmit = (event)=>{
		event.preventDefault()
	}

	render(){
		return (
			<form className={style.login} onSubmit={this.onFormSubmit}>
				<div className="container">
					<label className={style.login__label}>Login:</label>
					<input className={[style.login__username] + ' control'} name='username' value={this.state.username} onInput={this.onFieldChange}></input>
					<label className={style.login__label}>Password:</label>
					<input className={[style.login__password] + ' control'} type="password" name="password" value={this.state.password} onInput={this.onFieldChange}></input>
					<button className={[style.login__submit] + ' control'}>Login</button>
				</div>
			</form>
		)
	}
}

export default Login