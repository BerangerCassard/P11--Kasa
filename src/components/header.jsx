import React from "react";
import '../styles/navigation.css'
import logo from '../assets/img/logo.png'

class Header extends React.Component{

render() {

	return (
		<nav className='header'>
			<div>
				<img src={logo} alt='logo'/>
			</div>

			<ul className='menu'>
				<li>
					Accueil
				</li>
				<li>
					A Propos
				</li>
			</ul>
		</nav>
	)
}

}

export default Header
