import React from 'react'
import QRCode from 'react-qr-code'
import './styles.css'
const QRCodeModal = ({ url, onClose }) => {
	return (
		<div className='qrcode-modal-overlay'>
			<div className='qrcode-modal-container'>
				<div className='qrcode-modal-close' onClick={onClose}></div>
				<div className='qrcode-modal-text'>
					Scan the QR code with your phone. Within 1-3 seconds the AR function
					opens on your phone.
				</div>
				<div className='qrcode-separator'></div>
				<div className='qrcode-wrapper'>
					{' '}
					<QRCode fgColor={'#4169E1'} level={'L'} value={url} size={120} />
				</div>
			</div>
		</div>
	)
}

export default QRCodeModal
