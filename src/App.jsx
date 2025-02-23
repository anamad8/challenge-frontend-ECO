import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, ModelDetails } from './page';
import { Footer, Navbar } from './components';
import './App.css';

function App() {
  const [activeNav, setActiveNav] = useState("Modelos");
  const location = useLocation(); 

  
  useEffect(() => {
    if (location.pathname.startsWith("/models/")) {
      setActiveNav("ModelDetails"); 
    } else if (location.pathname === "/") {
      setActiveNav("Modelos"); 
    }
  }, [location]); 
  return (
    <>
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />

      <Routes>
        <Route
          exact path="/"
          element={<Home setActiveNav={setActiveNav} />}
        />
        <Route
          path="/models/:id"
          element={<ModelDetails setActiveNav={setActiveNav} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;