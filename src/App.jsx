import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from 'react';
import Header from './layout/header/Header';
import Sidebar from './layout/sidebar/Sidebar';
import Content from './layout/content/Content';


function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Header toggleSidebar={() => setShowSidebar(true)} />
      <div className="container-fluid">
        <div className="row App">
          {/* Sidebar always visible on large screens, offcanvas on small screens */}
           <Sidebar show={showSidebar} handleClose={() => setShowSidebar(false)} />
          
          <div className="content-area ">
            <Content />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
