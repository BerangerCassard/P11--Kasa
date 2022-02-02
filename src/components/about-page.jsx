import React from "react";
import '../styles/banner.css'
import '../styles/about-page.css'
import Accordion from "./accordion.jsx";
import about from "../assets/data/about";
import Banner from "./banner";
import banner from '../assets/img/about-banner.jpg'


class AboutPage extends React.Component {

	render() {
		return(
			<main className='about-page'>
				<Banner
				src={banner}
				id='about-page-banner'
				shadow='banner-shadow'
				/>
				{about.map( value => (
					<Accordion
						className='accordion'
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
