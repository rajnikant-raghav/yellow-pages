import React from 'react'
import AddData from './components/AddData'
import Retrive from './components/Retrive'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/adduser' element={<AddData/>} />
      <Route path='/retrive' element={<Retrive/>} />
    </Routes>      
      </BrowserRouter>
  )
}

export default App
