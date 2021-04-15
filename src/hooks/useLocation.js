/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCoordsCurrent, setSearchCity } from '../redux/slice'

const useLocation = () => {
  const [loadingCurrent, setLoadingCurrent] = useState(true)
  const dispatch = useDispatch()

  const geoLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
          dispatch(setSearchCity(coords))
          dispatch(setCoordsCurrent(coords))
          setLoadingCurrent(false)
        },
        () => {
          dispatch(setSearchCity('helsinki'))
          setLoadingCurrent(false)
        }
      )
    } else {
      dispatch(setSearchCity('helsinki'))
      setLoadingCurrent(false)
    }
  }

  return { loadingCurrent, geoLocation }
}

export default useLocation
