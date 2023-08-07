import { getPlantsByQuery, getAllPlants } from "../services/plants.js"
import { useState } from "react"
import Plant from "../components/Plant.jsx"

export default function Home() {
  const [valInput, setValInput] = useState("")
  const [plants, setPlants] = useState([])

  const handleChangeInput = async (e) => {
    const { value } = e.target
    const arr = []
    const allPlants = await getAllPlants()

    setValInput(value)

    allPlants.forEach(plant => {
      if (plant.common_name.toLowerCase().includes(value.toLowerCase())) {
        arr.push(plant)
      }
    })

    if (value) {
      setPlants(arr)
    }
    else {
      setPlants([])
    }
  }

  return (
    <div className="home">
      <h1>Welcome to the Plant Database!</h1>
      <div className="search">
        <h2>Search for plant by name:</h2>
        <input type="text" value={valInput} onChange={handleChangeInput} />
      </div>
      <div className="plants-container">
        {plants.map(plant => (
          <Plant plant={plant} key={plant._id} />
        ))}
      </div>
    </div>
  )
}