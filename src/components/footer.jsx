import React from "react";
import '../styles/footer.css'
import logo from '../assets/img/logo-white.png'

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className='footer-wrapper'>
				<img className='footer-logo' src={logo} alt='logo-white'/>
				<p>© 2020 Kasa. All rights reserved</p>
			</footer>
		)
	}

}

export default Footer
