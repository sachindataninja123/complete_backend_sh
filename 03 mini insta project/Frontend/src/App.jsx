import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Allposts from './pages/Allposts'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<CreatePost />} />
        <Route path="/Allposts" element={<Allposts />} />
      </Routes>
    </div>
  )
}

export default App
