import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import Converter from './Converter';
import ExchangeRates from './ExchangeRates';
import Footer from './Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Converter />
      <ExchangeRates />
      <Footer />
    </div>
  );
}

export default App;