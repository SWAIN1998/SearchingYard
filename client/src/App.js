import React from 'react'
import ProductPosting from './Pages/ProductPosting'
import Products from './Pages/Products'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/post' element={<ProductPosting/>}/>
        </Routes>
      </Router>        
    </div>
  )
}
export default App
