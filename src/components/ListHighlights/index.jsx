import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MdSend } from 'react-icons/md'

import { ListHightlightsWrapper, WindStatus, WindStatusIcon } from './styles'
import Hightlight from '../Hightlight'
import Subtitle from '../Common/Text/Subtitle'
import { todaySelector } from '../../redux/slice/selectors'
import intNumber, { numberOneFixed } from '../../helpers/intNumber'
import TextBase from '../Common/Text/Paragraph/ParagraphBase'
import { ParagraphSm } from '../Common/Text/Paragraph/styles'
import Progress from '../Common/Progress'

const ListHightlights = ({ today }) => {
  return (
    <>
      <Subtitle>Today’s Hightlights </Subtitle>
      <ListHightlightsWrapper>
        {today && (
          <>
            <Hightlight
              title="Wind status"
              measure="mph"
              number={intNumber(today.wind_speed)}>
              <WindStatus>
                <WindStatusIcon>
                  <MdSend size={13} />
                </WindStatusIcon>
                <TextBase as={ParagraphSm}>WSM</TextBase>
              </WindStatus>
            </Hightlight>
            <Hightlight title="Humidity" measure="%" number={today.humidity}>
              <Progress width={today.humidity} />
            </Hightlight>
            <Hightlight
              title="Visibility"
              measure="miles"
              number={numberOneFixed(today.visibility)}
            />
            <Hightlight
              title="Air Pressure"
              measure="mb"
              number={intNumber(today.air_pressure)}
            />
          </>
        )}
      </ListHightlightsWrapper>
    </>
  )
}

ListHightlights.propTypes = {
  today: PropTypes.object,
}

const mapToStateToProps = (state) => ({
  today: todaySelector(state),
})

export default connect(mapToStateToProps)(ListHightlights)
