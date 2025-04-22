import { useGLTF } from '@react-three/drei'
import React from 'react'
import { useCustomization } from '../../context/castomization'
import { getMaterialTextureProps } from '../../utils/materialUtils'

const Backpack = () => {
	const { nodes } = useGLTF('/models/backpack.glb')
	const { bodyColor, metalColor, material } = useCustomization()

	if (!nodes.Back_pack_001?.children) {
		return null
	}

	const backpackGroup = nodes.Back_pack_001
	const [backpackBody, backpackMetal, backpackStrap] = backpackGroup.children

	const bodyTextureProps = getMaterialTextureProps(material)
	const metalTextureProps = getMaterialTextureProps('metal')
	const strapTextureProps = getMaterialTextureProps('strap')

	const materialProperties = {
		leather: { roughness: 0.9, metalness: 0.1 },
		fabric: { roughness: 1.0, metalness: 0.0 },
		denim: { roughness: 0.95, metalness: 0.05 },
	}

	const { roughness, metalness } =
		materialProperties[material] || materialProperties.fabric

	return (
		<group dispose={null} scale={[0.3, 0.3, 0.3]}>
			{/* Body Mesh  */}
			<mesh geometry={backpackBody.geometry} castShadow receiveShadow>
				<meshStandardMaterial
					attach='material'
					color={bodyColor.color}
					{...bodyTextureProps}
					roughness={roughness}
					metalness={metalness}
					envMapIntensity={0.5}
				/>
			</mesh>

			{/* Metal Parts Mesh */}
			<mesh geometry={backpackMetal.geometry} castShadow receiveShadow>
				<meshStandardMaterial
					attach='material'
					color={metalColor.color}
					{...metalTextureProps}
					metalness={0.9}
					envMapIntensity={0.8}
				/>
			</mesh>

			{/* Strap Mesh */}
			<mesh geometry={backpackStrap.geometry} castShadow receiveShadow>
				<meshStandardMaterial
					attach='material'
					color={bodyColor.color}
					{...strapTextureProps}
					roughness={roughness}
					metalness={metalness}
					envMapIntensity={0.5}
				/>
			</mesh>
		</group>
	)
}

export default Backpack

useGLTF.preload('/models/backpack.glb')
