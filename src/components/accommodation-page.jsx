import React from "react";
import data from "../assets/data/data";
import { withRouter} from 'react-router-dom'

class AccommodationPage extends React.Component {
	constructor(props) {
		super(props);
		this.idParam = this.props.match.params.id;
		console.log(this.idParam)
		this.accomodation = data.find( accommodation => accommodation.id.includes(this.idParam))
		console.log(this.accomodation)
	}

	render() {
		return (
			<div>
				<h1> test {this.accomodation.title}</h1>
			</div>
		)
	}
}

export default withRouter(AccommodationPage)
