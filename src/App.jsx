
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddBookPage from './pages/AddBookPage'
import FindBooksPage from './pages/FindBooksPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'

function App() {
  
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/' element={<HomePage/>} />
      <Route path='/search' element={<FindBooksPage/>} />
      <Route path='/add' element={<AddBookPage/>} />
    
    </Routes>
    )
  }
  
  export default App
  