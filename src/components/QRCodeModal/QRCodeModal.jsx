import React from 'react'
import './styles.css'
const QRCodeModal = ({ onClose }) => {
	return (
		<div className='qrcode-modal-overlay'>
			<div className='qrcode-modal-container'>
				<div className='qrcode-modal-close' onClick={onClose}></div>
				<div className='qrcode-modal-text'>
					Scan the QR code with your phone. Within 1-3 seconds the AR function
					opens on your phone.
				</div>
				<div className='qrcode-separator'></div>
				<div className='qrcode-wrapper'></div>
			</div>
		</div>
	)
}

export default QRCodeModal
