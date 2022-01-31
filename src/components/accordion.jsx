import React from "react";
import '../styles/accordion.css'

class Accordion extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {title, content, id} = this.props
		return (
			<div className={this.props.className} id={title}>
				<div>
					<input type='checkbox' name={id} id={id} className='accordion__input'/>
					<label htmlFor={id} className='accordion__label'>{title}</label>
					<div className='accordion__content'>

						{
							Array.isArray(content) ? (
								<ul className='accordion-list'>
									{content.map((item, index)=> (
										<li key={index}>{item}</li>
									))}
								</ul>

							) : (
								<p>
									{content}
								</p>
							)
						}

					</div>
				</div>
			</div>
		)
	}
}

export default Accordion
