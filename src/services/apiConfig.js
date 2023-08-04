import axios from "axios"

const baseURL = "https://plants-api-lemon.vercel.app/"

const api = axios.create({
  baseURL: baseURL
})

export default api