import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from '../components/NavBar/NavBar'

import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Dashboard from './pages/dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </div>
    </Router>
  )
}

export default App
