import React from "react";
import '../styles/cards.css'

class Cards extends React.Component {

	render() {
		const {data} = this.props

		return (
			<div className='cards-wrapper'>
				{console.log(data)}
				{data.map(hotel => (
					<div className="card">
						<h3 className='card-title' ey={hotel.id}>{hotel.title}</h3>
					</div>
				))}
			</div>
		)
	}
}

export default Cards
