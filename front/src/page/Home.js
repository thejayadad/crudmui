import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Note from '../components/Note';



const Home = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Note />
        <Note />
        <Note />
        <Note />

      </Grid>

    </Container>
  )
}

export default Home