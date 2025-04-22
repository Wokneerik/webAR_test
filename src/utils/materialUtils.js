import { useTexture } from '@react-three/drei'

const BASE_PATH = '/public/materials/'

const MATERIAL_TEXTURES = {
	leather: {
		map: 'leather_baseColor.jpg',
		normalMap: 'leather_normal.jpg',
		roughnessMap: 'leather_occlusionRoughnessMetallic.jpg',
	},
	fabric: {
		map: 'fabric_baseColor.jpg',
		normalMap: 'fabric_normal.jpg',
		roughnessMap: 'fabric_occlusionRoughnessMetallic.jpg',
	},
	denim: {
		map: 'denim_baseColor.jpg',
		normalMap: 'denim_normal.jpg',
		roughnessMap: 'denim_occlusionRoughnessMetallic.jpg',
	},
	metal: {
		map: 'metall_baseColor.jpg',
		normalMap: 'metall_normal.jpg',
		roughnessMap: 'metall_occlusionRoughnessMetallic.jpg',
	},
	strap: {
		map: 'strap_baseColor.jpg',
		normalMap: 'strap_normal.jpg',
		roughnessMap: 'strap_occlusionRoughnessMetallic.jpg',
	},
}

export const getMaterialTextureProps = materialType => {
	const textureFiles =
		MATERIAL_TEXTURES[materialType] || MATERIAL_TEXTURES.fabric

	const texturePaths = {}
	for (const [key, file] of Object.entries(textureFiles)) {
		texturePaths[key] = `${BASE_PATH}${file}`
	}

	return useTexture(texturePaths)
}
