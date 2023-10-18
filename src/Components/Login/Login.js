import React, { useState } from "react";
import style from './style.module.css'

function Login(){
 	const [state, changeState] = useState({username:'', password:''})

	return (
		<div className="container">
			<form className={style.login} onSubmit={(e)=>{e.preventDefault()}}>
				<div className={style.login__title}>Log in</div>
				<label className={style.login__label}>Username:</label>
				<input className={[style.login__username] + ' control'} 
					    name='username' 
						 value={state.username} 
						 onInput={(event)=>changeState({[event.target.name]:event.target.value})}/>
				<label className={style.login__label}>Password:</label>
				<input className={[style.login__password] + ' control'} 
						 type="password" 
						 name="password" 
						 value={state.password} 
						 onInput={(event)=>changeState({[event.target.name]:event.target.value})}/>
				<button className={[style.login__submit] + ' control'}>Login</button>
			</form>
		</div>
	)
}

export default Login