import React from 'react'
import { connect } from 'react-redux'
import { setCelcius } from '../../redux/slice'
import BtnCircleDegree from '../Common/BtnCircleDegree'
import { HeadDegreesWrapper } from './styles'
import { isCelsiusSelector } from '../../redux/slice/selectors'

const HeadDegrees = ({ isCelsius, setCelcius }) => {
  const handleCelcius = () => setCelcius()

  return (
    <HeadDegreesWrapper>
      <BtnCircleDegree active={isCelsius} onClick={handleCelcius}>
        °C
      </BtnCircleDegree>
      <BtnCircleDegree active={!isCelsius} onClick={handleCelcius}>
        °F
      </BtnCircleDegree>
    </HeadDegreesWrapper>
  )
}

const mapToStateToProps = (state) => ({
  isCelsius: isCelsiusSelector(state),
})

const mapToDispatchToProps = (dispatch) => ({
  setCelcius: () => dispatch(setCelcius()),
})

export default connect(mapToStateToProps, mapToDispatchToProps)(HeadDegrees)
