import React, {useState} from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Products from '../pages/Products'
import Page404 from '../pages/Page404'
import Navigationbar from './components/Navigationbar'
import FooterSect from './components/FooterSect'
import CategoriePage  from '../pages/CategoriePage'
import ProductPage from '../pages/ProductPage'
import Header from './components/Header'
import Categories from './components/CategoriesSection'
import Cart from './components/cart'

function App() {

  const [user, setUser] = useState(true)
  return (
    <>

      <Navigationbar />
     
{
user 
? 
(
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productID" element={<ProductPage />} />
        <Route path="/products/category/:categoryName" element={<CategoriePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
)
: 
(
<Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
)
}
<CategoriePage />  
<FooterSect />

    </>
  );
}

export default App;
