import { createSlice } from '@reduxjs/toolkit'
import { fetchLocationWoeid, fetchSearch } from './thunk'

const initialState = {
  searchCity: '',
  location: {
    city: null,
  },
  days: {},
  currentGeo: {},
  error: false,
  isCelcius: true,
}

const weather = createSlice({
  name: 'Weather',
  initialState: initialState,
  reducers: {
    setSearchCity: (state, action) => {
      state.searchCity = action.payload
    },
    setCoordsCurrent: (state, action) => {
      state.currentGeo = action.payload
    },
    setCelcius: (state) => {
      console.log('a')
      state.isCelcius = !state.isCelcius
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchLocationWoeid.fulfilled,
      (state, action) => {
        const { consolidated_weather } = action?.payload
        const weekWithOutToday = consolidated_weather.filter((_, i) => i !== 0)
        state.days.week = weekWithOutToday
        state.days.today = consolidated_weather[0]
      },
      builder.addCase(fetchSearch.fulfilled, (state, action) => {
        state.location.city = action.payload
      }),
      builder.addCase(fetchSearch.rejected, (state) => {
        state.error = true
      })
    )
  },
})

export const { setCoordsCurrent, setSearchCity, setCelcius } = weather.actions
export default weather.reducer
