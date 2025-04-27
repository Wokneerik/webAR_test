import { useGLTF, useTexture } from '@react-three/drei'
import React, { useMemo } from 'react'
import { useCustomization } from '../../context/castomization'

const Backpack = () => {
	const { nodes } = useGLTF('/models/backpack.glb')
	const { bodyColor, metalColor, material } = useCustomization()

	if (!nodes.Back_pack_001?.children) {
		return null
	}

	const backpackGroup = nodes.Back_pack_001
	const [backpackBody, backpackMetal, backpackStrap] = backpackGroup.children

	const leatherTextureProps = useTexture({
		map: '/materials/leather_baseColor.jpg',
		normalMap: '/materials/leather_normal.jpg',
		roughnessMap: '/materials/leather_occlusionRoughnessMetallic.jpg',
	})

	const fabricTextureProps = useTexture({
		map: '/materials/fabric_baseColor.jpg',
		normalMap: '/materials/fabric_normal.jpg',
		roughnessMap: '/materials/fabric_occlusionRoughnessMetallic.jpg',
	})

	const denimTextureProps = useTexture({
		map: '/materials/denim_baseColor.jpg',
		normalMap: '/materials/denim_normal.jpg',
		roughnessMap: '/materials/denim_occlusionRoughnessMetallic.jpg',
	})

	const metalTextureProps = useTexture({
		map: '/materials/metall_baseColor.jpg',
		normalMap: '/materials/metall_normal.jpg',
		roughnessMap: '/materials/metall_occlusionRoughnessMetallic.jpg',
	})

	const strapTextureProps = useTexture({
		map: '/materials/strap_baseColor.jpg',
		normalMap: '/materials/strap_normal.jpg',
		roughnessMap: '/materials/strap_occlusionRoughnessMetallic.jpg',
	})

	const materialProperties = useMemo(
		() => ({
			leather: { roughness: 0.9, metalness: 0.1 },
			fabric: { roughness: 1.0, metalness: 0.0 },
			denim: { roughness: 0.95, metalness: 0.05 },
		}),
		[]
	)

	const { roughness, metalness } =
		materialProperties[material] || materialProperties.fabric

	let currentTextureProps
	switch (material) {
		case 'leather':
			currentTextureProps = leatherTextureProps
			break
		case 'fabric':
			currentTextureProps = fabricTextureProps
			break
		case 'denim':
			currentTextureProps = denimTextureProps
			break
		default:
			currentTextureProps = fabricTextureProps
			break
	}

	return (
		<group dispose={null} scale={[0.3, 0.3, 0.3]}>
			{/* Body Mesh  */}
			<mesh geometry={backpackBody.geometry} castShadow receiveShadow>
				<meshStandardMaterial
					attach='material'
					color={bodyColor.color}
					{...currentTextureProps}
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
