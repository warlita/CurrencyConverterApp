import React, { useState } from 'react';

function Converter() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD'); // we need a default of USD for this project
  const [convertedAmount, setConvertedAmount] = useState(null); // To display converted value
  const [errorMessage, setErrorMessage] = useState(''); // To handle errors

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleConvert = async () => {
    if (!amount) {
      setErrorMessage('Please enter an amount.');
      return;
    }

    try {
      // this is our API and we are converting from USD to desired currency in ${currency}
      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=USD&to=${currency}`
      );
      const data = await response.json();
      
      // this updates the converted amount
      setConvertedAmount(data.rates[currency]);
      setErrorMessage(''); // Clear any previous errors
    } catch (error) {
      setErrorMessage('Error converting currency. Please try again.');
    }};

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
