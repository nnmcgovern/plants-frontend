import { Routes, Route } from "react-router-dom"
import Plants from "./screens/Plants"
import PlantDetail from "./screens/PlantDetail"
import PlantEdit from "./screens/PlantEdit"
import Home from "./screens/Home"
import Header from "./components/Header"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/plants/:id" element={<PlantDetail />} />
        <Route path="/plants/:id/edit" element={<PlantEdit />} />
      </Routes>
    </div>
  )
}

export default App