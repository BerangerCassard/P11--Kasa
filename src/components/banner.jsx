import React from "react";
import '../styles/banner.css'

class Banner extends React.Component {
	render() {
		const {src, content, id, shadow} = this.props

		return (
			<div className='wrapper-banner'>
				<img
					id={id}
					className='banner'
					src={src}
				/>
				<div id={shadow} className='shadow-banner'></div>
				{content ? <h2 className='advertising'>{content}</h2>: null}
			</div>
		)
	}
}

export default Banner
