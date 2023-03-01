import { useState } from 'react'
import Error from './pages/Error'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
function App() {


  return (

    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Kezdőlap</Link></li>
            <li><Link to="/products">Termékek</Link></li>
            <li><Link to="/cart">Kosár</Link></li>
            <li><Link to="/contact">Kapcsolat</Link></li>

          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route>
            <Route path='/' element={<Home/> }/>
            <Route path='/products' element={<>Rólunk</>} />
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
