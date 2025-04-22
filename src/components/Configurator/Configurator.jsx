import React from 'react'
import { bodyColors, metalColors } from '../../constants'
import { useCustomization } from '../../context/castomization'
import './styles.css'

const Configurator = () => {
	const {
		bodyColor,
		setBodyColor,
		metalColor,
		setMetalCOlor,
		material,
		setMaterial,
	} = useCustomization()

	return (
		<div className='configurator-container'>
			<div className='configurator-row'>
				{/* Body Colors */}
				<div className='configurator-block'>
					<div className='block-title'>BODY COLORS</div>
					<div className='separator'></div>
					<div className='color-options-container'>
						{bodyColors.map(colorOption => (
							<div
								key={colorOption.name}
								className={`color-option ${
									bodyColor.name === colorOption.name ? 'selected' : ''
								}`}
								onClick={() => setBodyColor(colorOption)}
							>
								<div
									className='color-circle'
									style={{ backgroundColor: colorOption.color }}
								></div>
								<div className='color-name'>{colorOption.name}</div>
							</div>
						))}
					</div>
				</div>

				{/* Metal Colors */}
				<div className='configurator-block'>
					<div className='block-title'>METAL COLOR</div>
					<div className='separator'></div>
					<div className='color-options-container'>
						{metalColors.map(metalOption => (
							<div
								key={metalOption.name}
								className={`color-option ${
									metalColor.name === metalOption.name ? 'selected' : ''
								}`}
								onClick={() => setMetalCOlor(metalOption)}
							>
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

				{/* Materials */}
				<div className='configurator-block'>
					<div className='block-title'>MATERIAL</div>
					<div className='separator'></div>
					<div className='material-options'>
						{['leather', 'fabric', 'denim'].map(materialOption => (
							<button
								key={materialOption}
								className={`rounded-button ${
									material === materialOption ? 'selected' : ''
								}`}
								onClick={() => setMaterial(materialOption)}
							>
								{materialOption.charAt(0).toUpperCase() +
									materialOption.slice(1)}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Configurator
