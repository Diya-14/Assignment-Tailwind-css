// src/App.tsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const Contact = lazy(() => import('./pages/Contact'));
const Jobs = lazy(() => import('./pages/Jobs')); // Import Jobs page
const NotFound = lazy(() => import('./pages/NotFound'));

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        {/* No ErrorBoundary needed for Jobs */}
        <Route path="/jobs" element={<Jobs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
