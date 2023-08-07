import axios from "axios"

const apiURLs = {
  production: "https://plants-api-lemon.vercel.app/",
  development: "http://localhost:3000"
}

let baseURL = ""

if (window.location.hostname === "localhost") {
  baseURL = apiURLs.development
}
else {
  baseURL = apiURLs.production
}

const api = axios.create({
  baseURL: baseURL
})

export default api