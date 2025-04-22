import './App.css'
import SceneCanvas from './components/SceneCanvas/SceneCanvas'
import { CustomizationProvider } from './context/castomization'

function App() {
	return (
		<CustomizationProvider>
			<SceneCanvas />
		</CustomizationProvider>
	)
}

export default App
