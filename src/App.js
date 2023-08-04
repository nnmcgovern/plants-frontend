import { Routes, Route } from "react-router-dom"
import Plants from './screens/Plants'
import PlantDetail from "./screens/PlantDetail"
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/plants" element={<Plants />} />
        <Route path="/plants/:id" element={<PlantDetail />} />
      </Routes>
    </div>
  )
}

export default App