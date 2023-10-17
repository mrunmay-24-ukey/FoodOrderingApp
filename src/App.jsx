import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import ProtectedRoute from './components/ProtectedRoute'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/success' element={<ProtectedRoute element={<Success/>}/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App