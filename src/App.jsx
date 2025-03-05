import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from 'react';
import Header from './layout/header/Header';
import Sidebar from './layout/sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './components/Routers';


function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Router>
      <Header toggleSidebar={() => setShowSidebar(true)} />
      <div className="container-fluid">
        <div className="row App">
          {/* Sidebar always visible on large screens, offcanvas on small screens */}
           
            <Sidebar show={showSidebar} handleClose={() => setShowSidebar(false)} />
        
          <div className="content-area ">
            <Routers />
          </div>
        </div>
      </div>
      </Router>
    </>
  )
}

export default App;
