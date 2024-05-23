
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'
import Wishlist from './pages/wishlist/Wishlist'
import Basket from './pages/basket/Basket'
import Add from './pages/add/Add'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/:productId' element={<Detail/>}/>

    </Routes>
      
    </>
  )
}

export default App
