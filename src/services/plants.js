import api from "./apiConfig"

export const getPlants = async () => {
  try {
    const res = await api.get("/plants")
    return res.data
  }
  catch (err) {
    console.log("Error getting plants: ", err)
  }
}