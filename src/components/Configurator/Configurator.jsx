import React from 'react'
import { bodyColors, metalColors } from '../../constants'
import './styles.css'

const Configurator = () => {
	return (
		<div className='configurator-container'>
			<div className='configurator-row'>
				<div className='configurator-block'>
					<div className='block-title'>BODY COLORS</div>
					<div className='separator'></div>
					<div className='color-options-container'>
						{bodyColors.map(colorOption => (
							<div key={colorOption.name} className='color-option'>
								<div
									className='color-circle'
									style={{ backgroundColor: colorOption.color }}
								></div>
								<div className='color-name'>{colorOption.name}</div>
							</div>
						))}
					</div>
				</div>

				<div className='configurator-block'>
					<div className='block-title'>METAL COLOR</div>
					<div className='separator'></div>
					<div className='color-options-container'>
						{metalColors.map(metalOption => (
							<div key={metalOption.name} className='color-option'>
								<div
									className='color-image-circle'
									style={{
										backgroundImage: `url(${metalOption.colorImgPath})`,
									}}
								></div>
								<div className='color-name'>{metalOption.name}</div>
							</div>
						))}
					</div>
				</div>

				<div className='configurator-block'>
					<div className='block-title'>MATERIAL</div>
					<div className='separator'></div>
					<div className='material-options'>
						<button className='rounded-button'>Leather</button>
						<button className='rounded-button'>Fabric</button>
						<button className='rounded-button'>Denim</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Configurator
