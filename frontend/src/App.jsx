import { useState } from 'react'
import './App.css'
import NavBar from '../components/NavBar/NavBar'

import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard';
import Client from './pages/clients/client';
import Projects from './pages/projects'
import Billing from './pages/billing'
import Calendar from './pages/calendar'
import Team from './pages/team'
import Marketing from './pages/marketing'
import Analytics from './pages/analytics'

function App() {
  
  return (
    <Router>
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/clients' element={<Client />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/billing' element={<Billing />}></Route>
        <Route path='/calendar' element={<Calendar />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/marketing' element={<Marketing />}></Route>
        <Route path='/analytics' element={<Analytics/>}></Route>
      </Routes>
    </div>
    </Router>
  )
}

export default App
