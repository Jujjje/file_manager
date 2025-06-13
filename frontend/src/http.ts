import axios from 'axios'

const http = axios.create({
  baseURL: 'http://laravel-api.test', // Ваш базовый URL
  withCredentials: true, // Обязательно для Sanctum
})

export default http
