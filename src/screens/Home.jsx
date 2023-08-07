import { getPlantsByQuery, getAllPlants } from "../services/plants.js"
import { useState } from "react"
import Plant from "../components/Plant.jsx"

export default function Home() {
  // const [selected, setSelected] = useState("name")
  const [valInput, setValInput] = useState("")
  const [plants, setPlants] = useState([])

  // const handleChangeSelector = e => {
  //   setSelected(e.target.value)
  // }

  const handleChangeInput = async (e) => {
    setValInput(e.target.value)
    const arr = []
    const allPlants = await getAllPlants()

    allPlants.forEach(plant => {
      if (plant.common_name.toLowerCase().includes(e.target.value.toLowerCase())) {
        arr.push(plant)
      }
    })

    setPlants(arr)
  }

  return (
    <div className="home">
      {/* <label htmlFor="parameters">Choose a parameter: </label>
      <select name="parameters" onChange={handleChangeSelector}>
        <option value="common_name">Name</option>
        <option value="scientific_name">Scientific Name</option>
        <option value="family">Family</option>
        <option value="dimensions.min_value">Height</option>
        <option value="origin">Origin</option>
      </select>
      <form>
        <input type="text" value={valInput} onChange={handleChangeInput} />
      </form>
      <div className="plants-container">
        {plants?.map(plant => (
          <Plant plant={plant} key={plant["_id"]} />
        ))}
      </div> */}

      <h1>Search by Name</h1>
      <input type="text" value={valInput} onChange={handleChangeInput} />
      <div className="plants-container">
        {plants.map(plant => (
          <Plant plant={plant} key={plant._id} />
        ))}
      </div>
    </div>
  )
}