import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navber from './componant/Navber';
import { Home } from './componant/home';
import { About } from './componant/About';
import { Dashboard } from './componant/dashboard';
import { Login } from './componant/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './componant/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <ToastContainer />
      {window.location.pathname !== '/login' && window.location.pathname !== '/admin110' ? <Navber /> : null}
      <Routes>
{/* public pages */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
{/* public pages */}

{/* private pages */}
        <Route
          path='/admin110'
          element={
            isLoggedIn ? (
              <Dashboard />
            ) : (
              <Navigate to='/login' />
            )
          }
        />
        <Route
          path='/login'
          element={
            isLoggedIn ? (
              <Navigate to='/admin110' />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
        />
{/* private pages */}
      </Routes>
      {window.location.pathname !== '/login' && window.location.pathname !== '/admin110' ? <Footer /> : null}
    </Router>
  );
}

export default App;
