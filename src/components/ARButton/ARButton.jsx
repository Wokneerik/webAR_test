import React, { useState } from 'react'

import QRCodeModal from '../QRCodeModal/QRCodeModal'
import './styles.css'
import arIcon from '/public/AR.svg'

const ARButton = () => {
	const [showQRCode, setShowQRCode] = useState(false)

	const handleButtonClick = () => {
		setShowQRCode(prev => !prev)
	}

	const arExperienceURL = 'http://192.168.0.100:5173/'

	return (
		<>
			<button className='ar-button' onClick={handleButtonClick}>
				<img
					src={arIcon}
					alt='AR Icon'
					width='16'
					height='16'
					className='ar-icon'
				/>
				See In Real Life
			</button>

			{showQRCode && (
				<QRCodeModal url={arExperienceURL} onClose={handleButtonClick} />
			)}
		</>
	)
}

export default ARButton
