import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import "../stylesheets/Home.css";

 export function Home() {
  return (
   <>
   <div className='homepage'>
      <Sidebar />
      <Chat />
   
   </div>
    </>
  )
}

