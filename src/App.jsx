import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Overview from './pages/Overview';
import Inventory from './pages/Inventory';
import Settings from './pages/Settings';
import Reports from './pages/Reports';
import AddEmployee from './pages/AddEmployee';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="layout">
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <h2 className="logo">Synexus</h2>
          <nav className="nav-links">
            <Link to="/" onClick={() => setIsSidebarOpen(false)}>Overview</Link>
            <Link to="/inventory" onClick={() => setIsSidebarOpen(false)}>Inventory</Link>
            <Link to="/settings" onClick={() => setIsSidebarOpen(false)}>Settings</Link>
            <Link to="/reports" onClick={() => setIsSidebarOpen(false)}>Reports</Link>
            <Link to="/add-employee" onClick={() => setIsSidebarOpen(false)}>Add Employee</Link>
          </nav>
        </aside>

        <div className="main">
          <header className="topbar">
            <button
              className="menu-toggle"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              ☰
            </button>
            <h3>Admin Dashboard</h3>
          </header>

          <main className="content">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/add-employee" element={<AddEmployee />} />            
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;