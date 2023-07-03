import { BrowserRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import HomePage from "./pages/Homepage"
import LandingPage from "./pages/LandingPage"

function App() {  

  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<RootLayout/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="/home" element={<HomePage/>}/>

         </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
