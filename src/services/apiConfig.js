import axios from "axios"

// const baseURL = "https://plants-api-lemon.vercel.app/"
const baseURL = "http://localhost:3000"

const api = axios.create({
  baseURL: baseURL
})

export default api