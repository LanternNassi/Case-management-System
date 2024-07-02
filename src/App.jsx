import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Index from './Pages/Frontend/Home/Index'
import About from './Pages/Frontend/About/About'
import Contact from './Pages/Frontend/Contact/Contact'
import FAQ from './Pages/Frontend/FAQ/FAQ'
import Login from './Pages/Backend/Auth/Login'
import Services from './Pages/Frontend/Services/Services'

import { Route, Routes, Navigate } from "react-router-dom";


function App() {

  return (
    <>
    <Routes>
      <Route index element={<Index/>}/>
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/FAQ" element={<FAQ/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Services" element={<Services/>} />

    </Routes>
      
    </>
  )
}

export default App
