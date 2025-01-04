import React from 'react'
import Navbar from './Navbar'
import Chats from './Chats'
import "../stylesheets/Sidebar.css"
import Search from './Search'
function Sidebar() {
  return (
    <>
    <div className='sidebar'>
    <Navbar />
    <Search />
    <Chats />
    </div>
    </>
  )
}

export default Sidebar