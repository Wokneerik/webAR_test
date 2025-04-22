import { useGLTF, useTexture } from '@react-three/drei'
import React from 'react'
import { useCustomization } from '../../context/castomization'

const Backpack = () => {
	const { nodes } = useGLTF('/models/backpack.glb')

	const backpackGroup = nodes.Back_pack_001

	const backpackBody = backpackGroup?.children?.[0]
	const backpackMetal = backpackGroup?.children?.[1]
	const backpackStrap = backpackGroup?.children?.[2]

	const { bodyColor, metalColor, material } = useCustomization()

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

	const metalTextureProps = useTexture({
		map: '/public/materials/metall_baseColor.jpg',
		normalMap: '/public/materials/metall_normal.jpg',
		roughnessMap: '/public/materials/metall_occlusionRoughnessMetallic.jpg',
	})

	const strapTextureProps = useTexture({
		map: '/public/materials/strap_baseColor.jpg',
		normalMap: '/public/materials/strap_normal.jpg',
		roughnessMap: '/public/materials/strap_occlusionRoughnessMetallic.jpg',
	})

	return (
		<group dispose={null} scale={[0.3, 0.3, 0.3]}>
			{backpackGroup?.children?.map((child, index) => {
				if (!child.isMesh) return null

				if (child === backpackBody) {
					let textureProps = {}
					if (material === 'leather') {
						textureProps = leatherTextureProps
					} else if (material === 'fabric') {
						textureProps = fabricTextureProps
					} else {
						textureProps = denimTextureProps
					}

					return (
						<mesh
							key={index}
							geometry={child.geometry}
							material={child.material}
							castShadow
							receiveShadow
						>
							<meshStandardMaterial
								attach='material'
								color={bodyColor.color}
								map={textureProps.map}
								normalMap={textureProps.normalMap}
								roughnessMap={textureProps.roughnessMap}
								roughness={
									material === 'leather'
										? 0.7
										: material === 'fabric'
										? 0.9
										: 0.8
								}
								metalness={material === 'leather' ? 0.3 : 0.1}
								envMapIntensity={0.8}
							/>
						</mesh>
					)
				} else if (child === backpackMetal) {
					return (
						<mesh
							key={index}
							geometry={child.geometry}
							material={child.material}
							castShadow
							receiveShadow
						>
							<meshStandardMaterial
								attach='material'
								color={metalColor.color}
								map={metalTextureProps.map}
								normalMap={metalTextureProps.normalMap}
								roughnessMap={metalTextureProps.roughnessMap}
								metalness={0.9}
								envMapIntensity={0.8}
							/>
						</mesh>
					)
				} else
					<mesh
						key={index}
						geometry={child.geometry}
						material={child.material}
						castShadow
						receiveShadow
					>
						<meshStandardMaterial
							attach='material'
							color={metalColor.color}
							map={strapTextureProps.map}
							normalMap={strapTextureProps.normalMap}
							roughnessMap={strapTextureProps.roughnessMap}
						/>
					</mesh>
			})}
		</group>
	)
}

export default Backpack

useGLTF.preload('/models/backpack.glb')
