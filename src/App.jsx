import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Overview from './pages/Overview';
import Inventory from './pages/Inventory';
import Settings from './pages/Settings';
import Reports from './pages/Reports';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <aside className="sidebar">
          <h2 className="logo">Synexus</h2>
          <nav className="nav-links">
            <Link to="/">Overview</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/reports">Reports</Link>
          </nav>
        </aside>

        <div className="main">
          <header className="topbar">
            <h3>Admin Dashboard</h3>
          </header>

          <main className="content">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;