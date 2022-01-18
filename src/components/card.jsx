import React from "react";
import '../styles/cards.css'
import {NavLink} from 'react-router-dom'

class Card extends React.Component {

	render() {
		const {data} = this.props

		return (
			<div className='cards-wrapper'>
				{data.map(hotel => (
						<NavLink to={`/accommodation/${hotel.id}`} key={hotel.id}>
							<div className="card" key={hotel.id}>
								<h3 className='card-title' key={hotel.id}>{hotel.title}</h3>
							</div>
						</NavLink>
				))}
			</div>
		)
	}
}

export default Card
