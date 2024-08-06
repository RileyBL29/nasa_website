import React from 'react'
import SideBar from './components/SideBar';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)

  function handleDisplayModal() {
    
  }
  return (
    <>
    <Main />
    {showModal && (
      <SideBar />
      )}
    <Footer />
    </>
  )
}

export default App