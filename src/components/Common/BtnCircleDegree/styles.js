import styled, { css } from 'styled-components'

const CircleBtnWrapper = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.color.stateBase};
  border-radius: 50%;
  color: ${({ theme }) => theme.color.greyLight};
  cursor: pointer;
  display: grid;
  font-weight: 700;
  font-size: ${({ theme }) => theme.size.font.lg};
  height: 40px;
  justify-content: center;
  margin: 0 ${({ theme }) => theme.size.space.sm};
  width: 40px;
  &:hover {
    background-color: ${({ theme }) => theme.color.greyLight};
    color: ${({ theme }) => theme.color.stateText};
    opacity: 0.8;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
  }
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.color.greyLight};
      color: ${({ theme }) => theme.color.stateText};
      pointer-events: none;
      &:hover {
        opacity: 1;
      }
    `};
`
export default CircleBtnWrapper
