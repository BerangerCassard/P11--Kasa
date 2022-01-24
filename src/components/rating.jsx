import React from "react";
import '../styles/rating.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

class Rating extends React.Component {
	constructor(props) {
		super(props);
		const {rate} = this.props
		this.stars = new Array(5)
			.fill()
			.map( (star, index) => (
				(rate > index) ? 'filled' : 'empty'
			))
		console.log(this.stars)
	}

	render() {
		return(
			<div>
				{
					this.stars.map( star => (
						<FontAwesomeIcon icon={faStar} className={star}/>
					))


				}
			</div>
		)
	}
}

export default Rating


