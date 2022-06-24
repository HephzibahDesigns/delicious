import React from 'react'
import Home from './Home'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Cusine from './Cusine'
import SeachedPage from './SeachedPage'
import Recipe from './Recipe';


function Pages() {
  // const location = useLocation();
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path="/" exact element={<Home />} />
          <Route path="/cusine" exact element={<Cusine />} />
          <Route path='/cusine/:type' element={<Cusine />} />
          <Route path='/searched/:search' element={<SeachedPage />} />
          <Route path='/recipe/:name' element={<Recipe />} />
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default Pages
