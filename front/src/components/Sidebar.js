import React from 'react'
import { ListItem, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';







const Sidebar = () => {
  return (
    <div>
   <Box
      sx={{
        width: 240,
        borderRight: "1px solid #222"
      }}
      >
        <Typography>
          Notes Tracker
        </Typography>
        <List>
          <ListItem>
            <ListItemText >Home </ListItemText>
            <ListItemIcon><HomeIcon /></ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemText >Create</ListItemText>
            <ListItemIcon><AddIcon /></ListItemIcon>
          </ListItem>
        </List>
      </Box>

    </div>
  )
}

export default Sidebar