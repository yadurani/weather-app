import { createAsyncThunk } from '@reduxjs/toolkit'
import * as API from './repository'
import { URL_API_SEARCH } from '../../schemas/api'

export const fetchLocationWoeid = createAsyncThunk(
  'Weather/fetchLocationWoeid',
  async (woeid) => {
    try {
      return await API.fetchLocationSelected(woeid)
    } catch (error) {
      throw error
    }
  }
)

export const fetchSearch = createAsyncThunk(
  'Weather/fetchSearch',
  async (searchCity) => {
    try {
      const URL_SEARCH =
        typeof searchCity === 'string'
          ? `${URL_API_SEARCH}?query=${searchCity}`
          : `${URL_API_SEARCH}?lattlong=${searchCity.latitude},${searchCity.longitude}`
      const response = await API.fetchLocationSearch(URL_SEARCH)
      return response[0]
    } catch (error) {
      throw error
    }
  }
)
