import { useEffect, useState } from 'react'
import './App.css'
import Autho from './components/Autho'
import Login from './components/Login';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Navber from './components/Navber';
import HerroSection from './components/HerroSection';
import Add from './components/Add';

function App() {
  const [token, setToken] = useState(false)
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token))
  }
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data);
    }
  }, [])
  return (
    <>
      <Navber  token={token}/>
      <Routes>
        <Route path='/' element={<HerroSection />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<Autho />} />
        <Route path="/add" element={<Add/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
