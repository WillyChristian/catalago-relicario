import React from 'react'
import "./styleLike.css"
export default class LikeBar extends React.Component {
	state = {
		cont: 0
	}
	likeCount = () =>{
		let cont = this.state.cont
		let soma
		soma = cont + 1
		return this.setState({cont:soma}),
		console.log(this.state.cont)	
	}
	render() {
		const {cont} = this.state
		return (
			<div>
			<div className="like-container">
				<a href="#" className="likeBtn" onClick={this.likeCount}>{cont}</a>			
			</div>
			</div>
		)
	}
}