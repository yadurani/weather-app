import styled from 'styled-components'

export const CurrentWrapper = styled.button`
  background-color: ${({ theme }) => theme.color.greyDarkness};
  width: 40px;
  height: 40px;
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.shadow};
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: opacity 0.5 ease;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
  }
  svg {
    fill: ${({ theme }) => theme.color.greyLight};
  }
`
