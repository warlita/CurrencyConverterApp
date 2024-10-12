import React, { useState } from 'react';

function Converter() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD'); // we need a default of USD for this project

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleConvert = () => {
    // This is where conversion logic will go later
    console.log(`Converting ${amount} USD to ${currency}`);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Amount in USD"
      />
      <select value={currency} onChange={handleCurrencyChange}>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        {/* Add more currencies as needed */}
      </select>
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
}

export default Converter;
