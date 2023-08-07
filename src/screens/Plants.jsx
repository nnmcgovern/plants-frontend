import { useState, useEffect } from "react"
import { getAllPlants } from "../services/plants"
import Plant from "../components/Plant.jsx"

export default function Plants() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetchPlants()
  }, [])

  async function fetchPlants() {
    const allPlants = await getAllPlants()
    setPlants(allPlants)
  }

  return (
    <div className="plants-container">
      {plants?.map(plant => (
        <Plant plant={plant} key={plant["_id"]} />
      ))}
    </div>
  )
}
