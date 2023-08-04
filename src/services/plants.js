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
    return res.data
  }
  catch (err) {
    console.log("Error getting plant by id: ", err)
  }
}

export const getPlantsByQuery = async (param, value) => {
  try {
    const res = await api.get(`/plants?${param}=${value}`)
    return res.data
  }
  catch (err) {
    console.log("Error getting plants by query: ", err)
  }
}

export const getPlantsByQueries = async (paramsObj) => {

}