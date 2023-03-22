import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';


const Note = () => {
  return (
    <Grid item xs={12} md={6} lg={4} spacing={3}>
        <Paper>
            <Card elevation={1}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                    <DeleteIcon/>
                  </IconButton>
                }
                subheader="Note Content"
            />
                <CardContent>
                    <Typography variant='body' color="textSecondary">
                        Note Details will go here
                    </Typography>
                </CardContent>
            </Card>
        </Paper>
    </Grid>
  )
}

export default Note