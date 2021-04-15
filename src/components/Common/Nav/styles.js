import styled from 'styled-components'

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.color.greyDarkness};
  color: ${({ theme }) => theme.color.greyLight};
  padding: 0 ${({ theme }) => theme.size.space.lg};
  height: 40px;
  box-shadow: ${({ theme }) => theme.shadow};
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: opacity 0.5 ease;
  opacity: 1;
  font-size: ${({ theme }) => theme.size.font.md};
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
  }
`
export const SearchNavWrapper = styled.div`
  position: fixed;
  overflow-y: auto;
  width: calc(456px - 92px);
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 18px ${({ theme }) => theme.size.space.xxxl} 18px;
  background-color: ${({ theme }) => theme.color.blueBase};
  z-index: 1;
  transition: transform 0.5s ease;
  transform: ${({ active }) =>
    active ? 'translateX(0)' : 'translateX(-456px)'};

  @media (max-width: 960px) {
    @media (max-width: 960px) {
      padding: ${({ theme }) => theme.size.space.xl};
    }
    width: calc(100% - 44px);
    transform: ${({ active }) =>
      active ? 'translateX(0)' : 'translateX(-100%)'};
  }
`
export const ListSearch = styled.ul`
  margin-top: ${({ theme }) => theme.size.space.xxxl};
  text-align: left;
`
export const ItemSearch = styled.li`
  align-items: center;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.greyLight};
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.size.space.xl} ${theme.size.space.sm}`};
  transition: border 0.3s ease-in;
  &:hover {
    border-color: ${({ theme }) => theme.color.greyBase};
    cursor: pointer;
  }
  svg {
    fill: ${({ theme }) => theme.color.greyBase};
  }
`

export const SearchButtonClose = styled.button`
  margin-left: auto;
  cursor: pointer;
  display: grid;
  margin-bottom: ${({ theme }) => theme.size.space.xxxl};
  svg {
    fill: ${({ theme }) => theme.color.greyBase};
  }
  &:focus {
    outline: none;
  }
`
