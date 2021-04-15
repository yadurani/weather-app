import React, { useState } from 'react'
import { connect } from 'react-redux'
import { MdKeyboardArrowRight, MdClose } from 'react-icons/md'

import SearchField from '../SearchField'
import { fetchListSearch } from '../../../redux/slice/repository'
import {
  ItemSearch,
  ListSearch,
  SearchButton,
  SearchButtonClose,
  SearchNavWrapper,
} from './styles'
import { setCelcius, setSearchCity } from '../../../redux/slice'

const Nav = ({ handleSearchCity, handleCelsius }) => {
  const [active, setActive] = useState(false)
  const [search, setSearch] = useState('')
  const [listSearch, setListSearch] = useState([])

  const handleOpen = () => setActive(true)
  const handleChange = (e) => setSearch(e.target.value)

  const handleClose = () => {
    setActive(false)
    handleClear()
  }

  const handleSelectCity = (city) => () => {
    handleSearchCity(city)
    handleCelsius()
    setActive(false)
    handleClear()
  }

  const handleSubmit = () => {
    if (search.length >= 3)
      fetchListSearch(search).then((res) => setListSearch(res))
  }

  const handleClear = () => {
    setSearch('')
    setListSearch([])
  }

  return (
    <>
      <SearchButton onClick={handleOpen}>Seach for places</SearchButton>
      <SearchNavWrapper active={active}>
        <SearchButtonClose aria-label="Button close" onClick={handleClose}>
          <MdClose size={30} />
        </SearchButtonClose>
        <SearchField
          search={search}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <ListSearch>
          {listSearch?.map((city) => (
            <ItemSearch key={city.woeid} onClick={handleSelectCity(city.title)}>
              {city.title} <MdKeyboardArrowRight size={20} />
            </ItemSearch>
          ))}
        </ListSearch>
      </SearchNavWrapper>
    </>
  )
}

const mapToDispatchProps = (dispatch) => ({
  handleSearchCity: (city) => dispatch(setSearchCity(city)),
  handleCelsius: () => dispatch(setCelcius()),
})

export default connect(null, mapToDispatchProps)(Nav)
