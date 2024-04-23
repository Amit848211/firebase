import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sign from './Sign'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/sign' element={<Sign />}/>
        
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
