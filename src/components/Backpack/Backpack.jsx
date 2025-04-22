import { useGLTF, useTexture } from '@react-three/drei'
import React from 'react'
import { useCustomization } from '../../context/castomization'

const Backpack = () => {
	const { nodes } = useGLTF('/models/backpack.glb')

	const backpackGroup = nodes.Back_pack_001

	const { bodyColor, metalColor, material } = useCustomization()

	console.log('CHECK COLORS,', bodyColor, metalColor)

	const leatherTextureProps = useTexture({
		map: '/public/materials/leather_baseColor.jpg',
		normalMap: '/public/materials/leather_normal.jpg',
		roughnessMap: '/public/materials/leather_occlusionRoughnessMetallic.jpg',
	})

	const fabricTextureProps = useTexture({
		map: '/public/materials/fabric_baseColor.jpg',
		normalMap: '/public/materials/fabric_normal.jpg',
		roughnessMap: '/public/materials/fabric_occlusionRoughnessMetallic.jpg',
	})

	const denimTextureProps = useTexture({
		map: '/public/materials/denim_baseColor.jpg',
		normalMap: '/public/materials/denim_normal.jpg',
		roughnessMap: '/public/materials/denim_occlusionRoughnessMetallic.jpg',
	})

	return (
		<group dispose={null} scale={[0.3, 0.3, 0.3]}>
			{backpackGroup.children.map((child, index) => {
				if (child.isMesh) {
					return (
						<mesh
							key={index}
							geometry={child.geometry}
							material={child.material}
							castShadow
							receiveShadow
						>
							<meshStandardMaterial
								{...(material === 'leather'
									? leatherTextureProps
									: fabricTextureProps)}
							/>
						</mesh>
					)
				}
				return null
			})}
		</group>
	)
}

export default Backpack

useGLTF.preload('/models/backpack.glb')
