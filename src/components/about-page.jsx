import React from "react";
import '../styles/banner.css'
import '../styles/about-page.css'
import Accordion from "./accordion.jsx";
import about from "../assets/data/about";


class AboutPage extends React.Component {

	render() {
		return(
			<main className='about-page'>
				<div className='about-banner'></div>
				{about.map( value => (
					<Accordion
						key={value.id}
						id={value.id}
						title={value.title}
						content={value.content}
					/>
				))}
			</main>

		)
	}
}

export default AboutPage
