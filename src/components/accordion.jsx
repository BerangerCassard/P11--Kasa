import React from "react";
import '../styles/accordion.css'

class Accordion extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {title, content, id} = this.props
		return (
			<div className='accordion'>
				<div>
					<input type='radio' name='about_accordion' id={id} className='accordion__input'/>
					<label htmlFor={id} className='accordion__label'>{title}</label>
					<div className='accordion__content'>
						<p>
							{content}
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Accordion
