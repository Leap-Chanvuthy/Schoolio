import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layouts/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>  
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
