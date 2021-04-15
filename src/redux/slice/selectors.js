import { createSelector } from '@reduxjs/toolkit'

export const weekLocationSelector = createSelector(
  (state) => state.Weather.days.week,
  (v) => v
)

export const todaySelector = createSelector(
  (state) => state.Weather.days.today,
  (v) => v
)

export const locationSelector = createSelector(
  (state) => state.Weather.location,
  (v) => v
)

export const searchCitySelector = createSelector(
  (state) => state.Weather.searchCity,
  (v) => v
)

export const currentGeo = createSelector(
  (state) => state.Weather.currentGeo,
  (v) => v
)

export const statusSelector = createSelector(
  (state) => state.Weather.loading,
  (v) => v
)

export const isCelsiusSelector = createSelector(
  (state) => state.Weather.isCelcius,
  (v) => v
)
