import React from 'react'
import CircleBtnWrapper from './styles'

const BtnCircleDegree = ({ active, children, onClick }) => {
  return (
    <CircleBtnWrapper active={active} children={children} onClick={onClick} />
  )
}

export default BtnCircleDegree
