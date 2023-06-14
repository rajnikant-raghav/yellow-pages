import React from 'react'
import AddData from './components/AddData'
import Retrive from './components/Retrive'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/adduser' element={<AddData/>} />
      <Route path='/retrive' element={<Retrive/>} />
    </Routes>      
      </BrowserRouter>
  )
}

export default App
