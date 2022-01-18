import React from "react";
import '../styles/footer.css'

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='footer-wrapper'>
				<img src='../../public/logo-white.png' alt='logo-white'/>
				<p>© 2020 Kasa. All rights reserved</p>
			</div>
		)
	}

}

export default Footer
