import React from 'react'
import './styles.css'
import arIcon from '/public/AR.svg'

const ARButton = () => {
	return (
		<button className='ar-button'>
			<img
				src={arIcon}
				alt='AR Icon'
				width='16'
				height='16'
				className='ar-icon'
			/>
			See In Real Life
		</button>
	)
}

export default ARButton
