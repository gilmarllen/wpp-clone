import React from 'react'

import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'

import SearchIcon from '@material-ui/icons/Search'

export default function SearchIconAdornment() {
  return (
    <InputAdornment position="start">
      <IconButton disabled>
        <SearchIcon fontSize="small" />
      </IconButton>
    </InputAdornment>
  )
}
