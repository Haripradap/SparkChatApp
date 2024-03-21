import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'

import Login from './pages/Login/Login'
import SignUp from './pages/signup/SignUp'
import { Toaster } from 'react-hot-toast'


function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>

    <Toaster/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />

    
  
      
    </Routes>
    
    </div>
  )
}

export default App
