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
      <img className="plant-detail-image" src={plant.default_image?.original_url} height="500px" alt={plant.common_name} />
      <p>Scientific Name: {plant.scientific_name}</p>
      <p>Other names:{plant.other_name?.length ? plant.other_name.map((name, i) => i < plant.other_name.length - 1 ? ` ${name},` : ` ${name}`) : " (none)"}</p>
      {plant.family ? <p>Family: {plant.family}</p> : <p>Family: (no family listed)</p>}
      <p>{plant.dimension}</p>
      <p>Origin: {plant.origin?.length ? plant.origin.map((location, i) => i < plant.origin.length - 1 ? ` ${location},` : ` ${location}`) : " (none listed)"}</p>
      <p>{plant.description}</p>
    </div>
  )
}

/* <p>Pruning Month&#40;s&#41;: {plant.pruning_month?.length ? plant.pruning_month.map(month => `${month} `) : "(none listed)"}</p> */