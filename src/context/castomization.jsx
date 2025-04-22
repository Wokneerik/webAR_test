import { createContext, useContext, useState } from 'react'
import { bodyColors, metalColors } from '../constants'

const CustomizationContext = createContext({})

export const CustomizationProvider = props => {
	const [bodyColor, setBodyColor] = useState(bodyColors[0])
	const [metalColor, setMetalCOlor] = useState(metalColors[0])
	const [material, setMaterial] = useState('lather')

	return (
		<CustomizationContext.Provider
			value={{
				bodyColor,
				setBodyColor,

				metalColor,
				setMetalCOlor,

				material,
				setMaterial,
			}}
		>
			{props.children}
		</CustomizationContext.Provider>
	)
}

export const useCustomization = () => {
	const context = useContext(CustomizationContext)
	return context
}
