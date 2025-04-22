import React, { useState } from 'react'

import QRCodeModal from '../QRCodeModal/QRCodeModal'
import './styles.css'
import arIcon from '/public/AR.svg'

const ARButton = () => {
	const [showQRCode, setShowQRCode] = useState(false)

	const handleButtonClick = () => {
		setShowQRCode(prev => !prev)
	}
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

			{showQRCode && <QRCodeModal onClose={handleButtonClick} />}
		</>
	)
}

export default ARButton
