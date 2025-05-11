import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import Subjects from './components/Subjects';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/subjects" element={<Subjects />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;