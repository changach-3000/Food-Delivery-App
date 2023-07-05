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
import { ReviewProvider } from "./context/ReviewContext"
import AddReview from "./pages/AddReview"
import SingleFood from "./pages/SingleFood"
import MyOrders from "./pages/MyOrders"
import UpdateReviewForm from "./pages/UpdateReviewForm"


function App() {  
  return (
    <BrowserRouter>
    <AuthProvider>
      <FoodProvider>
        <ReviewProvider>
      <Routes>
         <Route path="/" element={<RootLayout/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/checkout" element={<AddToCart/>}/>
          <Route path="/food/:id" element={<SingleFood />} />
          <Route path="/addfood" element={<AddFood/>}/>
          <Route path="/addReview" element={<AddReview/>}/>
          <Route path="/orders" element={<MyOrders/>}/>
          <Route path="/updatereview" element={<UpdateReviewForm/>}/>
         </Route>
      </Routes>
      </ReviewProvider>
      </FoodProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
