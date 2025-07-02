import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles';
import Navbar from "./components/Navbar"
import Home from "./pages/home";
import Projects from "./pages/projects";
import Resume from "./pages/resume";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            {/*Maybe make a 404 page? Otherwise reroute * to home*/}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
