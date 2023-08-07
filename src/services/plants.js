import api from "./apiConfig.js"

export const getAllPlants = async () => {
  try {
    const res = await api.get("/plants")
    return res.data
  }
  catch (err) {
    console.log("Error getting plants: ", err)
  }
}

export const getPlantById = async (id) => {
  try {
    const res = await api.get(`/plants?_id=${id}`)
    return res.data[0]
  }
  catch (err) {
    console.log("Error getting plant by id: ", err)
  }
}

export const createPlant = async (newPlantData) => {
  try {
    const res = await api.post("/plants", newPlantData)
    return res.data
  }
  catch (err) {
    console.log("Error creating plant: ", err)
  }
}

export const updatePlantById = async (id, newPlantData) => {
  try {
    const res = api.put(`/plants/${id}`, newPlantData)
    return res.data
  }
  catch (err) {
    console.log("Error updating plant: ", err)
  }
}

export const deletePlantById = async (id) => {
  try {
    const res = await api.delete(`/plants/${id}`)
    return res.data
  }
  catch (err) {
    console.log("Error deleting plant: ", err)
  }
}