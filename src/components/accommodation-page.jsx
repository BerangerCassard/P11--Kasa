import React from "react";
import data from "../assets/data/data";

class AccommodationPage extends React.Component {
	constructor(props) {
		super(props);
		this.id = new URL(window.location).search.slice(2)
		this.accomodation = data.find( accommodation => accommodation.id.includes(this.id))
	}

	render() {
		return (
			<div> {console.log(this.accomodation)}
				<h1>{this.accomodation.title}</h1>
			</div>
		)
	}
}

export default AccommodationPage
