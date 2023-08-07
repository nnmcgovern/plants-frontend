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

export const getPlantsByQuery = async (param, value) => {
  try {
    // const res = await api.get(`/plants?${param}=${value}`)
    // return res.data

    const response = getAllPlants()
    const results = []

    response.forEach(plant => {
      if (typeof plant[param] === "string") {
        if (plant[param].toLowerCase().includes(value.toLowerCase())) {
          results.push(plant)
        }
      }
      else { // array, height is number???
        plant[param].forEach(el => {
          if (el.toLowerCase().includes(value.toLowerCase())) {
            results.push(plant)
          }
        })
      }
    })

    return results
  }
  catch (err) {
    console.log("Error getting plants by query: ", err)
  }
}

export const getPlantsByQueries = async (paramsObj) => {

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