import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import '../stylesheets/Home.css';

function Home() {
  return (
    <div className="homepage">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Home;