import React, { useState } from 'react';
import Navbar from './components/Navbar'; 
import Converter from './components/Converter'; 
import ExchangeRates from './components/ExchangeRates';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './custom.css'; 




function App() {
  const [rates, setRates] = useState({});

  return (
    <div>
      <Navbar />
      <Converter setRates={setRates} /> 
      <ExchangeRates rates={rates} />
      <Footer />
    </div>
  );
}

export default App;
