import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Navbar from './components/Navbar/Navbar';
import ThemeContextProvider from './Context/ThemeContext';
import index from './pages/Works/index';
import Studycase from './pages/Works/SutdyCase';




const App = () => {

  return (  
    <section>
    <BrowserRouter>
    <ThemeContextProvider>
    <Navbar />
    </ThemeContextProvider>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:work" element = {<Studycase />} />
        </Routes>
      </main>
    </BrowserRouter>
    </section>
  );
}


export default App;

