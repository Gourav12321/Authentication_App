import React from 'react'
import './App.css'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

import Profile from './Pages/Profile'
import Header from './Component/Header'
import PrivateRoute from './Component/PrivateRoute'
import Profile2 from './Pages/Profile2'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={<About/> } />
        <Route path='/authentication' element={<Profile2/>}/>
        
        <Route element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile/> } />
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App