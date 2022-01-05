import React from "react";
import '../styles/banner.css'

class Banner extends React.Component {
	render() {
		const {src, content} = this.props

		return (
			<div className='wrapper-banner'>
				<img
					className='banner'
					src={src}
				/>
				{content ? <h2 className='advertising'>{content}</h2>: null}
			</div>
		)
	}
}

export default Banner
