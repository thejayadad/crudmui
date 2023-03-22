import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { display } from '@mui/system';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';




export default function Create() {

  return (
    <>
    <Container >
      <Typography
      variant='h6'
      color="secondary"
      component="h2"
      gutterBottom

      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete='off'>
      <TextField
      sx={{
        marginTop: "20px",
        marginBottom:"block"
      }}
        label="Note Title"
        variant='outlined'
        fullWidth
        required
      />
            <TextField
      sx={{
        marginTop: "20px",
        marginBottom:"20px",
        display: "block"
      }}
        label="Note Content"
        variant='outlined'
        fullWidth
        required
        multiline
        rows={3}
      />
       <Button
      color="primary"
      variant='contained'
      >
        Submit
      </Button>
      </form>

    </Container>
    </>
  )
}
