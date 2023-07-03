import { BrowserRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import HomePage from "./pages/Homepage"
import LandingPage from "./pages/LandingPage"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import AddToCart from "./pages/AddToCart"
import AddRestaurant from "./pages/AddRestaurant"
import AddFood from "./pages/AddFood"

function App() {  

  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<RootLayout/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/checkout" element={<AddToCart/>}/>
          <Route path="/addrestaurant" element={<AddRestaurant/>}/>
          <Route path="/addfood" element={<AddFood/>}/>
         </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
