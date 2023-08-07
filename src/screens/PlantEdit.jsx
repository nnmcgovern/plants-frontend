import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPlantById, updatePlantById } from "../services/plants"

export default function PlantEdit() {
  const [plant, setPlant] = useState({
    common_name: "",
    default_image: {
      original_url: ""
    },
    scientific_name: "",
    other_name: [],
    family: "",
    dimension: "",
    origin: [],
    description: ""
  })

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchPlant()
  }, [])

  async function fetchPlant() {
    const plantFetched = await getPlantById(id)
    const obj = {
      common_name: plantFetched.common_name,
      default_image: {
        original_url: ""
      },
      scientific_name: plantFetched.scientific_name,
      other_name: plantFetched.other_name,
      family: plantFetched.family,
      dimension: plantFetched.dimension,
      origin: plantFetched.origin,
      description: plantFetched.description
    }

    if (plantFetched.hasOwnProperty("default_image")) {
      if (plantFetched.default_image.hasOwnProperty("original_url")) {
        obj.default_image.original_url = plantFetched.default_image.original_url
      }
    }

    console.log("Plant Edit: ", plantFetched)
    setPlant(obj)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updatePlantById(id, plant)
    navigate(`/plants/${id}`)
  }

  const handleChange = async (e) => {
    const { name, value } = e.target

    if (name === "other_name" || name === "origin") {
      setPlant(prev => ({
        ...prev,
        [name]: value.split(",")
      }))
    } else if (name === "original_url") {
      setPlant(prev => ({
        ...prev,
        default_image: {
          [name]: value
        }
      }))
    }
    else {
      setPlant(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  // console.log("plant: ", plant)

  return (
    <div>
      <h1>Edit Plant</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the common name"
          name="common_name"
          value={plant.common_name}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Enter the image URL"
          name="original_url"
          value={plant.default_image?.original_url}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Enter the scientific name"
          name="scientific_name"
          value={plant.scientific_name}
          onChange={handleChange}
        />

        {/* ???????????????????? */}
        <input
          type="text"
          placeholder="Enter other common name(s)"
          name="other_name"
          value={plant.other_name?.toString()}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Enter the family name"
          name="family"
          value={plant.family}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Enter the plant's dimension as 'Height: xx feet'"
          name="dimension"
          value={plant.dimension}
          onChange={handleChange}
        />

        {/* ?????????????????????????? */}
        <input
          type="text"
          placeholder="Enter the origin location(s) seperated by commas"
          name="origin"
          value={plant.origin?.toString()}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Enter a description"
          name="description"
          value={plant.description}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}