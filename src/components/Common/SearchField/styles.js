import styled from 'styled-components'

export const InputWrapper = styled.input`
  background: transparent;
  border-radius: 0;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.color.greyLight};
  color: ${({ theme }) => theme.color.greyBase};
  font-size: ${({ theme }) => theme.size.font.md};
  padding: ${({ theme }) => `${theme.size.space.sm} ${theme.size.space.md}`};
  position: relative;
  &::placeholder {
    color: ${({ theme }) => theme.color.greyBase};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
  }
`
export const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 86px;
  grid-gap: ${({ theme }) => theme.size.space.sm};
`

export const SearchButton = styled.button`
  cursor: pointer;
  width: 86px;
  height: 48px;
  background-color: ${({ theme }) => theme.color.blueLight};
  text-transform: capitalize;
  text-align: center;
  border-radius: 0;
  color: white;
  font-size: ${({ theme }) => theme.size.font.md};
  font-weight: 600;
  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
  }
`
