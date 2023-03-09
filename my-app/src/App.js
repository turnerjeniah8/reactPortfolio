import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/Aboutme";
import Contact from "./components/pages/Contact";
import PortfolioCard from "./components/PortfolioCard";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" coponent = {PortfolioCard} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;