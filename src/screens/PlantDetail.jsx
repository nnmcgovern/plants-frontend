import { useState, useEffect } from "react"
import { getPlantById, deletePlantById } from "../services/plants"
import { Link, useParams, useNavigate } from "react-router-dom"
import placeholderImg from "../img/placeholder-no-image.png"

export default function PlantDetail() {
  const [plant, setPlant] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchPlant(id)
  }, [])

  async function fetchPlant(id) {
    const plant = await getPlantById(id)
    setPlant(plant)
  }

  async function handleDelete(e) {
    await deletePlantById(id)
    navigate("/plants")
  }

  return (
    <div className="plant-detail">
      <h1>{plant?.common_name}</h1>
      {/* <img className="plant-detail-image" src={plant.default_image?.original_url} height="500px" alt={plant.common_name} /> */}
      {plant.default_image?.original_url ?
        <img src={plant.default_image.original_url} alt={plant.common_name} /> :
        <img src={placeholderImg} height="200px" alt="placeholder: no image available" />}
      <p>Scientific Name: {plant.scientific_name}</p>
      <p>Other names:{plant.other_name?.length ? plant.other_name.map((name, i) => i < plant.other_name.length - 1 ? ` ${name},` : ` ${name}`) : " (none)"}</p>
      {plant.family ? <p>Family: {plant.family}</p> : <p>Family: (no family listed)</p>}
      <p>{plant.dimension}</p>
      <p>Origin: {plant.origin?.length ? plant.origin.map((location, i) => i < plant.origin.length - 1 ? ` ${location},` : ` ${location}`) : " (none listed)"}</p>
      <p>{plant.description}</p>

      <Link to={`/plants/${id}/edit`}>
        <button>Edit Plant</button>
      </Link>
      <button onClick={handleDelete} >Delete Plant</button>
    </div>
  )
}

/* <p>Pruning Month&#40;s&#41;: {plant.pruning_month?.length ? plant.pruning_month.map(month => `${month} `) : "(none listed)"}</p> */