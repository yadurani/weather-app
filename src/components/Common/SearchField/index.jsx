import React from 'react'
import PropTypes from 'prop-types'

import { InputWrapper, SearchButton, SearchWrapper } from './styles'

const SearchField = ({ search, handleChange, handleSubmit }) => {
  const isDisabled = search.length < 3

  return (
    <SearchWrapper>
      <InputWrapper
        placeholder="search location"
        onChange={handleChange}
        value={search}
      />
      <SearchButton onClick={handleSubmit} disabled={isDisabled}>
        search
      </SearchButton>
    </SearchWrapper>
  )
}

SearchField.propTypes = {
  search: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
}

export default SearchField
