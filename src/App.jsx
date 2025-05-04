import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import Planner from './pages/planner';
import Login from './pages/login';
import Signup from './pages/signup';
import './index.css';
import Budget from './pages/budget';
import Goals from './pages/goals';
import CurrencyConverter from './pages/currency';
import Profile from './pages/profile';
import CheckLogin from './components/CheckLogin';
import Blog from "./pages/blog";
import Contact from "./pages/contact";

function App() {

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/profile' element={<CheckLogin><Profile/></CheckLogin>}/>
            <Route path='/budget' element={<CheckLogin><Budget/></CheckLogin>}/>
            <Route path="/Planner" element={<CheckLogin><Planner /></CheckLogin>} />
            <Route path='/CurrencyConverter' element={<CheckLogin><CurrencyConverter/></CheckLogin>}/>
            <Route path='/goals' element={<CheckLogin><Goals/></CheckLogin>}/>
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;