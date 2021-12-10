import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Contact from "./components/Contact";
import About from "./components/About";
import Products from "./components/Products/Products";
import Navigation from './components/Navigation';
import Footer from './components/Footer';

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
