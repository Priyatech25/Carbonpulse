// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
// import DashboardPage from '../Dashboard/DashboardPage';
// import EmissionsDataPage from '../EmissionsData/EmissionsDataPage';
// import ReportingPage from '../Reporting/ReportingPage';
// import RemindersPage from '../Reminders/RemindersPage';
// import OptimisationPage from '../Optimisation/OptimisationPage';
// import '../../../styles/global.css';

// // Simple NavBar component
// const NavBar = () => {
//   const navItems = [
//     { path: '/dashboard', label: 'Dashboard' },
//     { path: '/emissions-data', label: 'Emissions Data' },
//     { path: '/reporting', label: 'Reporting' },
//     { path: '/reminders', label: 'Reminders' },
//     { path: '/optimisation', label: 'Optimisation' }
//   ];

//   return (
//     <header className="nav-bar">
//       {navItems.map(item => (
//         <Link
//           key={item.path}
//           to={item.path}
//           className="nav-link"
//         >
//           {item.label}
//         </Link>
//       ))}
//     </header>
//   );
// };

// // Enhanced NavBar with active state
// const NavBarWithActive = () => {
//   try {
//     const location = useLocation();

//     const navItems = [
//       { path: '/dashboard', label: 'Dashboard' },
//       { path: '/emissions-data', label: 'Emissions Data' },
//       { path: '/reporting', label: 'Reporting' },
//       { path: '/reminders', label: 'Reminders' },
//       { path: '/optimisation', label: 'Optimisation' }
//     ];

//     return (
//       <header className="nav-bar">
//         {navItems.map(item => (
//           <Link
//             key={item.path}
//             to={item.path}
//             className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
//           >
//             {item.label}
//           </Link>
//         ))}
//       </header>
//     );
//   } catch (error) {
//     console.error('Error in NavBarWithActive:', error);
//     return <NavBar />;
//   }
// };

// // Main App Component
// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <NavBarWithActive />

//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Navigate to="/dashboard" replace />} />
//             <Route path="/dashboard" element={<DashboardPage />} />
//             <Route path="/emissions-data" element={<EmissionsDataPage />} />
//             <Route path="/reporting" element={<ReportingPage />} />
//             <Route path="/reminders" element={<RemindersPage />} />
//             <Route path="/optimisation" element={<OptimisationPage />} />
//             <Route path="*" element={<Navigate to="/dashboard" replace />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
