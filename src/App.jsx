import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Upload from './pages/Upload';
import Books from './components/Books/Books';
import BookDetail from './components/Books/BookDetail';
import { auth } from './config/firebase';
import { useEffect, useState } from 'react';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

function App() {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // if (loading){
  //   return 
  //   <div className='absoulte top[50%] left-[50%]'>
  //     <h3 className='text-black'>Loading</h3>
  //   </div>
  // }

  return (
    <BrowserRouter>
      <div>
      {user && <Navbar/>}
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/register" />} />
          <Route path="/upload" element={user ? <Upload /> : <Navigate to="/register" />} />
          <Route path='/books' element={user ? <Books /> : <Navigate to="/register" />} />
          <Route path='/book/:bookId' element={user ? <BookDetail /> : <Navigate to="/register" />} />
          <Route path='/books/book/:bookId' element={user ? <BookDetail /> : <Navigate to="/register" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        </Routes>
      </div>
      {user && <Footer/>}
    </BrowserRouter>
  );
}

export default App;
