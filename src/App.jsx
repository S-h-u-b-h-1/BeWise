import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div>
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;