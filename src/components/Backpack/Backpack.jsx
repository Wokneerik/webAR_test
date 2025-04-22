import { useGLTF } from '@react-three/drei'
import React from 'react'

const Backpack = () => {
	const { nodes } = useGLTF('/models/backpack.glb')

	const backpackGroup = nodes.Back_pack_001

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
						/>
					)
				}
				return null
			})}
		</group>
	)
}

export default Backpack

useGLTF.preload('/models/backpack.glb')
