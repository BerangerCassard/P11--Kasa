import React from "react";
import '../styles/gallery.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import Left from '../assets/svg/chevron-left-solid.svg'
import Right from '../assets/svg/chevron-right-solid.svg'

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			currentPicture : 0,
		}
	}

	nextPicture = () => {
		this.setState(prevState => ({
			currentPicture: prevState.currentPicture === this.props.pictures.length -1 ? 0 : prevState.currentPicture + 1
		})
	)}


	previousPicture = () => {
		this.setState( prevState => ({
			currentPicture: prevState.currentPicture === 0 ? this.props.pictures.length -1 : prevState.currentPicture -1
		}))
	}

	render(){
		const {pictures} = this.props
		return(
			<div className='gallery-wrapper'>
				<img src={pictures[this.state.currentPicture]} className='banner-picture'/>
				<div className='commands'>
					<img src={Left} onClick={this.previousPicture} className='previous-button'/>
					<img src={Right} onClick={this.nextPicture} className='next-button'/>
				</div>

			</div>
		)
	}
}

export default Gallery
