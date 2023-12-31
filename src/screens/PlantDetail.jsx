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
      <div className="plant-detail-container">
        <div className="plant-detail-image">
          {plant.default_image?.original_url ?
            <img src={plant.default_image.original_url} width="700px" alt={plant.common_name} /> :
            <img src={placeholderImg} height="200px" alt="placeholder: no image available" />}
        </div>
        <div className="plant-detail-info">
          <p><span>Scientific Name:</span> {plant.scientific_name}</p>
          <p><span>Other name(s):</span>{plant.other_name?.length ? plant.other_name.map((name, i) => i < plant.other_name.length - 1 ? ` ${name},` : ` ${name}`) : " (none)"}</p>
          {plant.family ? <p><span>Family:</span> {plant.family}</p> : <p><span>Family:</span> (no family listed)</p>}
          <p><span>Dimension(s):</span> {plant.dimension}</p>
          <p><span>Origin:</span> {plant.origin?.length ? plant.origin.map((location, i) => i < plant.origin.length - 1 ? ` ${location},` : ` ${location}`) : " (none listed)"}</p>
          <p>{plant.description}</p>
        </div>
      </div>

      <Link to={`/plants/${id}/edit`}>
        <button>Edit Plant</button>
      </Link>
      <button onClick={handleDelete} >Delete Plant</button>
    </div>
  )
}

/* <p>Pruning Month&#40;s&#41;: {plant.pruning_month?.length ? plant.pruning_month.map(month => `${month} `) : "(none listed)"}</p> */