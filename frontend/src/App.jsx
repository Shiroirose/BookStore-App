import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import ShowBook from './pages/ShowBook'
import CreateBooks from './pages/CreateBooks'
import EditBook from './pages/EditBook'
import Home from './pages/Home'
import DeleteBook from './pages/DeleteBook'


//for each route we need path and element              
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<CreateBooks/>} />
      <Route path='/books/edit/:id' element={<EditBook/>} />
      <Route path='/books/details/:id' element={<ShowBook/>} />
      <Route path='/books/details/:id' element={<DeleteBook/>} />
    </Routes>
  )
}

export default App