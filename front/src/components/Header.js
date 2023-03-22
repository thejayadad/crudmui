import { AppBar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <AppBar
    sx={{
        width: 990,
        padding: 2
    }}
    >
        <Typography>
            Notes Header
        </Typography>
    </AppBar>
  )
}

export default Header