import React from "react"
import './comments.css'

class Comments extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			comments : null
		}
	}
	
	async componentDidMount(){
		const response = await fetch('https://jsonplaceholder.typicode.com/comments')
		const data = await response.json()
		this.setState({comments:data})
	}

	render(){
		const commentList = this.state.comments?.map( comment => <Comment key={comment.id} value={comment}/>) ?? null
		return (
			<div className="container">
				<ul className="comments">
						{commentList}
				</ul>
			</div>
		)
	}
}

class Comment extends React.Component{
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