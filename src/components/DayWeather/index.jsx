import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isCelsiusSelector } from '../../redux/slice/selectors'
import { DayTemp, DayWrapper, DayImg } from './styles'
import TextBase from '../Common/Text/Paragraph/ParagraphBase'
import { setNameDegrees, setConvertDegrees } from '../../helpers/degrees'

const DayWeather = ({ nameDay, imgSrc, maxTemp, minTemp, isCelsius }) => {
  const nameDegrees = setNameDegrees(isCelsius)

  return (
    <DayWrapper>
      <TextBase>{nameDay}</TextBase>
      <DayImg src={imgSrc} alt={nameDay} />
      <DayTemp>
        <TextBase>
          {setConvertDegrees(minTemp, isCelsius)}
          {nameDegrees}
        </TextBase>
        <TextBase secondary>
          {setConvertDegrees(maxTemp, isCelsius)}
          {nameDegrees}
        </TextBase>
      </DayTemp>
    </DayWrapper>
  )
}

DayWeather.propTypes = {
  nameDay: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
}

const mapToStateToProps = (state) => ({
  isCelsius: isCelsiusSelector(state),
})

export default connect(mapToStateToProps, null)(DayWeather)
