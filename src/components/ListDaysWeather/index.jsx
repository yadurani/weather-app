import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { weekLocationSelector } from '../../redux/slice/selectors'
import DayWeather from '../DayWeather'
import { ListDayWrapper } from './styles'
import intNumber from '../../helpers/intNumber'
import { nameDay } from '../../helpers/formatDays'
import generateImage from '../../helpers/generateImg'

const ListDaysWeather = ({ week }) => {
  return (
    <ListDayWrapper>
      {week?.map((day, i) => (
        <DayWeather
          key={day.id}
          nameDay={nameDay(day.applicable_date, i)}
          maxTemp={intNumber(day.max_temp)}
          minTemp={intNumber(day.min_temp)}
          imgSrc={generateImage(day.weather_state_name)}
        />
      ))}
    </ListDayWrapper>
  )
}

ListDaysWeather.propTypes = {
  week: PropTypes.array,
}

const mapToStateToProps = (state) => ({
  week: weekLocationSelector(state),
})

export default connect(mapToStateToProps, null)(ListDaysWeather)
