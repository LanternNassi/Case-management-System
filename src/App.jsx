import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './Pages/Frontend/Home/Index'

import { Route, Routes, Navigate } from "react-router-dom";


function App() {

  return (
    <>
    <Routes>
      <Route index element={<Index/>}/>
    </Routes>
      
    </>
  )
}

export default App
