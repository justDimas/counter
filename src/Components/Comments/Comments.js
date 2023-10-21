import {Component, useEffect, useState } from "react"
import './comments.css'


function Comments(){
	let [state, changeState] = useState({comments:[]})
	
	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/comments')
			.then(resolve=> resolve.json())
			.then(data=>changeState({comments:data}))
	},[])
	
	return (
		<div className="container">
			<ul className="comments">
				{state.comments?.map( comment => <View key={comment.id} value={comment}/> ) ?? null}
			</ul>
		</div>
	)
}

class View extends Component{
	render(){
		const {postId, id, name, body, email} = this.props.value
		return (
			<li className="comments__item">
				<h3 className="comments__postid">Post Id: {postId}</h3>
				<h4 className="comments__userid">Comment Id: {id}</h4>
				<div className="comments__username">Username: {name}</div>
				<div className="comments__email">Email: {email}</div>
				<p className="comments__body">{body}</p>
			</li>
		)
	}
}

export default Comments