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
	}

	render() {
		return(
			<div className='rating-wrapper'>
				{
					this.stars.map( (star, index) => (
						<FontAwesomeIcon icon={faStar} className={star} key={index}/>
					))
				}
			</div>
		)
	}
}

export default Rating


