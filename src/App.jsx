import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Overview from './pages/Overview';
import Inventory from './pages/Inventory';
import Settings from './pages/Settings';
import Reports from './pages/Reports';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Overview</Link> | <Link to="/inventory">Inventory</Link> | <Link to="/settings">Settings</Link> | <Link to="/reports">Reports</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;