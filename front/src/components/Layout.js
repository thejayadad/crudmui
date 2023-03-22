import React from 'react'
import Sidebar from './Sidebar'
import Drawer from '@mui/material/Drawer';
import Header from './Header';

export default function Layout ({children}){

  return (
    <div className='root'>
      <Sidebar />
      <Header />
      <div className='feed'>
      {children}
      </div>

      </div>
  )
}
