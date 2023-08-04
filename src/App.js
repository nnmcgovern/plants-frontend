import { Routes, Route } from "react-router-dom"
import Plants from './screens/Plants'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/plants" element={<Plants />} />
      </Routes>
    </div>
  )
}

export default App