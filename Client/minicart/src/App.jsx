import { Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Product from "./Pages/Product"
import Singleproduct from "./Pages/Singleproduct"

function App() {

  return (
    <>
    <Routes>

      <Route  path="/"  element={<Home/>}   />
      <Route  path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products"  element={<Product/>}/>
      <Route path="/singleproduct/:id" element={<Singleproduct/>}/>


    </Routes>
  
    </>
  )
}

export default App
