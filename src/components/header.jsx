import React from "react";
import '../styles/header.css'
import logo from '../assets/img/logo.png'
import {Link} from 'react-router-dom'

class Header extends React.Component{

render() {

	return (
		<nav className='header'>
			<div>
				<img src={logo} alt='logo'/>
			</div>

			<ul className='menu'>
				<li>
					<Link to='/'>Accueil</Link>
				</li>
				<li>
					<Link to='/about'>A Propos</Link>

				</li>
			</ul>
		</nav>
	)
}

}

export default Header
