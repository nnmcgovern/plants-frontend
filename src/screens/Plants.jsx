import { useState, useEffect } from "react"
import { getPlants } from "../services/plants"
import Plant from "../components/Plant.jsx"

export default function Plants() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetchPlants()
  }, [])

  async function fetchPlants() {
    const allPlants = await getPlants()
    setPlants(allPlants)
  }

  return (
    <div className="plants-container">
      {plants.map(plant => (
        <Plant plant={plant} />
      ))}
    </div>
  )
}
