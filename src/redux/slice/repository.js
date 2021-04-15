import axios from 'axios'
import { URL_API, URL_API_SEARCH, URL_PROXY } from '../../schemas/api'

export const fetchLocationSelected = (woeid) =>
  axios.get(URL_PROXY + URL_API + woeid).then((r) => r.data)

export const fetchLocationSearch = (location) =>
  axios.get(URL_PROXY + location).then((r) => r.data)

export const fetchListSearch = (city) =>
  axios.get(`${URL_PROXY}${URL_API_SEARCH}?query=${city}`).then((r) => r.data)
