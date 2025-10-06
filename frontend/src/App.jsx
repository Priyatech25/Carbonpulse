

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';

// ✅ Page components (all default exports)
import DashboardPage from './components/Dashboard/DashboardPage';
import EmissionsDataPage from './components/EmissionsData/EmissionsDataPage';
import ReportingPage from './components/Reporting/ReportingPage';
import RemindersPage from './components/Reminders/RemindersPage';
import OptimisationCard from './components/Optimisation/OptimisationPage';
import AdminPage from './components/Admin/AdminPage';
// import AboutUsPage from './components/AboutUs/AboutUsPage'; 
      // folder name fixed
import LoginPage from './components/Login/LoginPage';

import './styles/global.css';
import APIAccessPage from './components/APIAccess/APIAccessPage';
import AboutUsPage from './components/AboutUs/AboutUsPage';
import Reward from './components/Reward/Reward';

// -------------------- NavBar --------------------
const NavBarWithActive = () => {
  const location = useLocation();
  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/emissions-data', label: 'Emissions Data' },
    { path: '/reporting', label: 'Reporting' },
    { path: '/reminders', label: 'Reminders' },
    { path: '/optimisation', label: 'Optimisation' },
    { path: '/admin', label: 'Admin' },
    { path: '/apiaccess', label: 'APIAccess' },
    { path: '/aboutus', label: 'AboutUs' },
    { path: '/login', label: 'Login' },
    { path: '/reward', label: 'Reward' },
  ];

  return (
    <header className="nav-bar">
      {navItems.map(item => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </header>
  );
};

// -------------------- Main App --------------------
function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBarWithActive />

        <main className="main-content">
          <Routes>
            {/* Root redirect */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {/* Pages */}
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/emissions-data" element={<EmissionsDataPage />} />
            <Route path="/reporting" element={<ReportingPage />} />
            <Route path="/reminders" element={<RemindersPage />} />
            <Route path="/optimisation" element={<OptimisationCard />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/apiaccess" element={<APIAccessPage/>} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reward" element={<Reward />} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

