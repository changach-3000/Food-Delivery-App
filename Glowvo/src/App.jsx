import { BrowserRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import HomePage from "./pages/Homepage"
import LandingPage from "./pages/LandingPage"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import AddToCart from "./pages/AddToCart"
import AddFood from "./pages/AddFood"
import { AuthProvider } from "./context/AuthContext"
import { FoodProvider } from "./context/FoodContext"


function App() {  
  return (
    <BrowserRouter>
    <AuthProvider>
      <FoodProvider>
      <Routes>
         <Route path="/" element={<RootLayout/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/checkout" element={<AddToCart/>}/>
          <Route path="/addfood" element={<AddFood/>}/>
         </Route>
      </Routes>
      </FoodProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
