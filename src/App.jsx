
import { Route, Routes } from 'react-router-dom'
import './App.css'
import FindBooksPage from './pages/FindBooksPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'

function App() {
  
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/' element={<HomePage/>} />
      <Route path='/search' element={<FindBooksPage/>} />
    
    </Routes>
    )
  }
  
  export default App
  