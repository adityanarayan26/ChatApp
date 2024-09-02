import React, { useContext } from 'react'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ChatSection from './components/ChatSection/ChatSection.jsx'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


const App = () => {




  return (
    <div className='h-screen w-full ' >
      <Routes>
        <Route path='/' element={<ChatSection />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App