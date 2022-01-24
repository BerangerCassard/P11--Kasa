import React from "react";
import {Redirect} from 'react-router-dom'
import data from "../assets/data/data";
import { withRouter} from 'react-router-dom';
import '../styles/accomodation.css'
import Accordion from "./accordion";
import Tag from "./tag";
import Rating from "./rating";

class AccommodationPage extends React.Component {
	constructor(props) {
		super(props);
		this.idParam = this.props.match.params.id;
		this.accommodation = data.find(accommodation => accommodation.id.includes(this.idParam))
	}

	render() {
		if (!this.accommodation) return <Redirect to="/404" />;

		const { title, location, pictures, host, equipments, tags, rating, description } = this.accommodation;

		return (
			<main className='accommodation-wrapper'>
				<div className='main-information-wrapper'>
					<div>
						<h1>{title}</h1>
						<p>{location}</p>
						<div className='tag-wrapper'>
							{tags.map( tag => (
								<Tag
									key={tag}
								tag={tag}
								/>
							))}
						</div>
					</div>
					<div>
						<div className='identity-wrapper'>
							<p>{host.name}</p>
							<img className='profile-picture' src={host.picture}/>
						</div>
						<Rating
						rate={rating}
						/>
					</div>
				</div>
				<div className='accordion-wrapper'>
					<Accordion
					className='accordion-accommodation accordion'
					content ={description}
					title='Description'
					id='description'
					/>
					<Accordion
					className='accordion-accommodation accordion'
					content={equipments}
					title='Equipements'
					id='equipements'
					/>
				</div>

			</main>
		)
	}
}

export default withRouter(AccommodationPage)
