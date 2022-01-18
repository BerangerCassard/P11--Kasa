
import React from "react";
import Banner from "./banner.jsx";
import banner from "../assets/img/homepage-banner.jpg";
import Card from "./card";
import data from "../assets/data/data.js"
import '../styles/home-page.css'

class HomePage extends React.Component {
	render() {
		return(
			<div className="home-page">
				<Banner
					src={banner}
					content="Chez vous, partout et ailleurs"
				/>
				<Card
					data={data}
				/>
			</div>
			)

	}
}

export default HomePage
