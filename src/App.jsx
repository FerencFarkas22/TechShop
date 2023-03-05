import { useState } from 'react'
import Error from './pages/Error'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import News from './pages/News'
import Products from './pages/Products'
function App() {

  

  return (

    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Ke zdőlap</Link></li>
            <li><Link to="/products">Termékek</Link></li>
            <li><Link to="/cart">Kosár</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route>
            <Route path='/' element={<Home/> }/>
            <Route path='/news/:slug' element={<News/>}></Route>
            <Route path='/products' element={<Products/>} />
            <Route path='/products/:category' element={<Products/>} />
            <Route path='/cart' element={<>Adatlap</>} />
            <Route path='/contact' element={<>Kosár</>} />
            <Route path='/*' element={<Error/>} />
           

            </Route>
        </Routes>
      </main>
    </Router>

  )
}

export default App
