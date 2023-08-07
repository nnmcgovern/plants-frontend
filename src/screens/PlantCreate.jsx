import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createPlant } from "../services/plants"

export default function PlantCreate() {
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

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createPlant(plant)
    navigate("/plants")
  }

  const handleChange = e => {
    const { name, value } = e.target

    if (name === "other_name" || name === "origin") {
      setPlant(prev => ({
        ...prev,
        [name]: value.split(",")
      }))
    }
    else if (name === "original_url") {
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

  return (
    <div className="plant-create">
      <h1>Add a New Plant</h1>
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

        <input
          type="text"
          placeholder="Enter other common name(s) seperated by commas"
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
          placeholder="Enter the plant's dimension(s) (ex. 'Height: xx feet')"
          name="dimension"
          value={plant.dimension}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Enter the origin location(s) seperated by commas"
          name="origin"
          value={plant.origin?.toString()}
          onChange={handleChange}
        />

        <textarea className="plant-create-description"
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
