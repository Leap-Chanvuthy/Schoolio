import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Upload from "./pages/Upload";

function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>  
            <Route path="/" element={<Home/>} />
            <Route path="/upload" element={<Upload/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
