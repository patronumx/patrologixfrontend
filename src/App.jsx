import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/Home';
import Solutions from './pages/Solutions';
import Platform from './pages/Platform';
import Security from './pages/Security';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Hipaa from './pages/Hipaa';
import AdminPortal from './pages/AdminPortal';
import AdminLogin from './pages/AdminLogin';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/hipaa" element={<Hipaa />} />
          <Route path="/login" element={<Login />} />

          {/* Secret Admin Credentials Gate */}
          <Route path="/0x-admin-gate" element={<AdminLogin />} />

          {/* Employee/Staff Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin', 'operations_manager', 'billing', 'payment', 'ar_denial']} />}>
            <Route path="/staff-access" element={<Dashboard />} />
          </Route>

          {/* Hidden Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/0x-sec-ops-v9" element={<AdminPortal />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
