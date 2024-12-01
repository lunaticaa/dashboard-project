import TopBar from "./components/navbar/TopBar"
import SideBar from "./components/SideBar/SideBar"
import './App.css'
import Home from "./components/Pages/Home/Home"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Users from "./components/Users/Users"
import { useState } from "react"
import Products from "./components/Products/Products"
import Reports from "./components/Reports/Reports"
import Mails from "./components/Mails/Mails"

function App() {

  const [show, setShow] = useState('home');
  const handleClick = (show) => {
    setShow(show)
  }
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <div className="container">
          <SideBar handleClick={handleClick} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/Mails" element={<Mails />} />
            <Route path="*" element={<Navigate to={`/${show}`} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App