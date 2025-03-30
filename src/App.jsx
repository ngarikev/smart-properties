import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from 'react';
import Header from './layout/header/Header';
import Sidebar from './layout/sidebar/Sidebar';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Routers from './components/Routers';
import useAuth from './hooks/useAuth'; // Import your auth hook

// Create a layout wrapper component
const AppLayout = ({ children, showSidebar, setShowSidebar }) => {
  // console.log("🚀 ~ AppLayout ~ showSidebar:", showSidebar)
  return (
    <>
      <Header toggleSidebar={() => setShowSidebar(true)} />
      <div className="container-fluid">
        <div className="row App">
          <Sidebar show={showSidebar} handleClose={() => setShowSidebar(false)} />
          <div className="content-area">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

// Component to determine which layout to use
const LayoutSelector = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  console.log("🚀 ~ LayoutSelector ~ isAuthenticated:", isAuthenticated)
  
  const [showSidebar, setShowSidebar] = useState(false);

  // Check if current route is an auth route (starts with /auth)
  // const isAuthRoute = location.pathname.startsWith('/auth');

  if (!isAuthenticated) {
    // Render without sidebar/header for auth pages
    return <div className="auth-page">{children}</div>;
  }

  // Render with full layout for authenticated users
  return (
    <AppLayout showSidebar={showSidebar} setShowSidebar={setShowSidebar}>
      {children}
    </AppLayout>
  )
};

function App() {
  return (
    <Router>
      <LayoutSelector>
        <Routers />
      </LayoutSelector>
    </Router>
  );
}

export default App;