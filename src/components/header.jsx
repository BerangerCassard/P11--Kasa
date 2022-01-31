import React from "react";
import '../styles/header.css'
import logo from '../assets/img/logo.png'
import {NavLink} from 'react-router-dom'

class Header extends React.Component{

render() {

	return (
		<nav className='header'>
			<div className='logo-wrapper'>
				<img src={logo} alt='logo'/>
			</div>

			<ul className='menu'>
				<li>
					<NavLink exact to='/' activeClassName='active' >Accueil</NavLink>
				</li>
				<li>
					<NavLink to='/about'>A Propos</NavLink>

				</li>
			</ul>
		</nav>
	)
}

}

export default Header
