import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer';
import Planner from './pages/planner';
import Budget from './pages/budget';
import Goals from './pages/goals';
import CurrencyConverter from './pages/currency';
import Blog from "./pages/blog";
import Contact from "./pages/contact";
function App() {

  return (
    <div>
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path='/budget' element={<ProtectedRoute><Budget/></ProtectedRoute>}/>
            <Route path="/planner" element={<ProtectedRoute><Planner /></ProtectedRoute>} />
            <Route path='/currency' element={<ProtectedRoute><CurrencyConverter/></ProtectedRoute>}/>
            <Route path='/goals' element={<ProtectedRoute><Goals/></ProtectedRoute>}/>
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;