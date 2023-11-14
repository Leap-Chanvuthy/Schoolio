import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Upload from './pages/Upload';
import { auth } from './config/firebase';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/register" />} />
          <Route path="/upload" element={user ? <Upload /> : <Navigate to="/register" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
