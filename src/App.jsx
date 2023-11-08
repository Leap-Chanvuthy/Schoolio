import { BrowserRouter , Routes , Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
