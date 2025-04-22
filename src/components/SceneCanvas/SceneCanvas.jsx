import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
import ARButton from '../ARButton/ARButton'
import Backpack from '../Backpack/Backpack'
import Configurator from '../Configurator/Configurator'

const SceneCanvas = () => {
	const near = 0.1
	const far = 5000
	const cameraFov = 40
	const width = window.innerWidth
	const height = window.innerHeight

	const camera = new THREE.PerspectiveCamera(
		cameraFov,
		width / height,
		near,
		far
	)
	camera.position.set(0, -400, 500)

	return (
		<>
			<Configurator />
			<ARButton />
			<Canvas camera={camera}>
				<OrbitControls
					enableZoom={true}
					enablePan={false}
					minDistance={300}
					maxDistance={900}
					target={[0, 10, 0]}
					maxPolarAngle={Math.PI / 2.3}
					minPolarAngle={Math.PI / 4.5}
				/>
				<ambientLight color={0x404040} intensity={1} />
				<directionalLight
					color={0xffffff}
					intensity={0.6}
					position={[300, 0, 200]}
					castShadow
				/>
				<hemisphereLight
					skyColor={0xffffff}
					groundColor={0x080820}
					intensity={0.6}
				/>

				<Backpack />
			</Canvas>
		</>
	)
}

export default SceneCanvas
