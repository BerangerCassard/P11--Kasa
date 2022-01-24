import React from "react";
import  {NavLink} from "react-router-dom";
import '../styles/error-page.css'

class ErrorPage extends React.Component {
	render() {
		return (
			<main className='error-wrapper'>
				<h1 className='error-title'>404</h1>
				<p className='error-subtitle'> Oups! la page que vous demandez n'existe pas</p>
				<NavLink to='/' >Retourner sur la page d'accueil</NavLink>
			</main>
		)
	}
}

export default ErrorPage
