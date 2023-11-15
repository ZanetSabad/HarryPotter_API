import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout"
import HomePage from "./pages/HomePage"
import AllWizard from './pages/AllWizards'
import Wizard from './pages/Wizard'
import Error from './pages/Error'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SharedLayout /> }>

          <Route index element={ <HomePage /> } />          
          <Route path="/allPokemon" element={ <AllWizard /> } />
          <Route path="wizard/:id" element={ <Wizard />} /> 
          <Route path="*" element={ <Error />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
