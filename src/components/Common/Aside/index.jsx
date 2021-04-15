import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MdLocationOn } from 'react-icons/md'

import {
  currentGeo,
  isCelsiusSelector,
  locationSelector,
  todaySelector,
} from '../../../redux/slice/selectors'
import {
  AsideFooter,
  AsideHead,
  AsideImg,
  AsideLocation,
  AsideTextDegree,
  AsideTextSecondary,
  AsideWrapper,
} from './styles'
import generateImage from '../../../helpers/generateImg'
import intNumber from '../../../helpers/intNumber'
import { formatDay } from '../../../helpers/formatDays'
import Subtitle from '../Text/Subtitle'
import TextBase from '../Text/Paragraph/ParagraphBase'
import { ParagraphLg } from '../Text/Paragraph/styles'
import { SubtitleLg } from '../Text/Subtitle/styles'
import CurrentGeo from '../CurrentGeo'
import Nav from '../Nav'
import { setCelciusCurrent, setSearchCity } from '../../../redux/slice'
import useLocation from '../../../hooks/useLocation'
import { setConvertDegrees, setNameDegrees } from '../../../helpers/degrees'
import Alert from '../Alert'

const Aside = ({
  today,
  location,
  currentGeo,
  searchCity,
  isCelsius,
  handleCelsius,
}) => {
  const [alert, setAlert] = useState(false)
  const { city } = location
  const { geoLocation } = useLocation()
  const convertDegrees = setConvertDegrees(
    intNumber(today?.the_temp),
    isCelsius
  )
  const showAlert = () => {
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 3000)
  }

  const handleSearch = () => {
    if (!isCelsius) handleCelsius()
    if (!Object.keys(currentGeo).length) {
      geoLocation()
      showAlert()
    } else {
      searchCity(currentGeo)
    }
  }

  return (
    <AsideWrapper>
      <AsideHead>
        <Nav />
        <CurrentGeo onClick={handleSearch} />
        {alert && <Alert text="You must allow your location!!" />}
      </AsideHead>
      {today && (
        <>
          <AsideImg src={generateImage(today.weather_state_name)} />
          <AsideTextDegree>
            {convertDegrees}
            <AsideTextSecondary>{setNameDegrees(isCelsius)}</AsideTextSecondary>
          </AsideTextDegree>
          <Subtitle as={SubtitleLg} secondary>
            {today.weather_state_name}
          </Subtitle>
          <AsideFooter>
            <TextBase as={ParagraphLg} third>
              Today • {formatDay(today.applicable_date)}
            </TextBase>
            <AsideLocation>
              <MdLocationOn />
              <TextBase as={ParagraphLg} third>
                {city.title}
              </TextBase>
            </AsideLocation>
          </AsideFooter>
        </>
      )}
    </AsideWrapper>
  )
}

Aside.propTypes = {
  location: PropTypes.object,
}

const mapToStateToProps = (state) => ({
  today: todaySelector(state),
  location: locationSelector(state),
  currentGeo: currentGeo(state),
  isCelsius: isCelsiusSelector(state),
})

const mapToDispatchToProps = (dispatch) => ({
  searchCity: (city) => dispatch(setSearchCity(city)),
  handleCelsius: () => dispatch(setCelciusCurrent()),
})

export default connect(mapToStateToProps, mapToDispatchToProps)(Aside)
