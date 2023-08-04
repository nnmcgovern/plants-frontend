import { useState, useEffect } from "react"
import { getPlantById } from "../services/plants"
import { useParams } from "react-router-dom"

export default function PlantDetail() {
  const [plant, setPlant] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetchPlant(id)
  }, [])

  async function fetchPlant(id) {
    const plant = await getPlantById(id)
    setPlant(plant[0])
  }

  return (
    <div>
      <h1>{plant.common_name}</h1>
      <img src={plant.default_image?.original_url} alt={plant.common_name} />
    </div>
  )
}