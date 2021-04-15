/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Copyright from '../components/Common/Copyright'
import Loading from '../components/Common/Loader'
import HeadDegrees from '../components/HeadDegrees'
import ListDaysWeather from '../components/ListDaysWeather'
import ListHightlights from '../components/ListHighlights'
import useLocation from '../hooks/useLocation'
import { searchCitySelector } from '../redux/slice/selectors'
import { fetchLocationWoeid, fetchSearch } from '../redux/slice/thunk'

const HomeContainer = ({ searchCity, loadLocation, fetchLocation }) => {
  const [loadingInfo, setLoadingInfo] = useState(false)
  const { loadingCurrent, geoLocation } = useLocation()

  const fetchData = async () => {
    setLoadingInfo(true)
    try {
      const response = await fetchLocation(searchCity)
      await loadLocation(response.payload.woeid)
    } catch {
    } finally {
      setLoadingInfo(false)
    }
  }

  useEffect(() => {
    geoLocation()
  }, [])

  useEffect(() => {
    if (searchCity) {
      fetchData()
    }
  }, [searchCity])

  if (loadingCurrent || loadingInfo) return <Loading />

  return (
    <>
      <HeadDegrees />
      <ListDaysWeather />
      <ListHightlights />
      <Copyright />
    </>
  )
}
const mapToStateToProps = (state) => ({
  searchCity: searchCitySelector(state),
})

const mapToDispatchToProps = (dispatch) => ({
  loadLocation: (woeid) => dispatch(fetchLocationWoeid(woeid)),
  fetchLocation: (coords) => dispatch(fetchSearch(coords)),
})

export default connect(mapToStateToProps, mapToDispatchToProps)(HomeContainer)
