import React, { useState, useEffect } from 'react';
import ExchangeRates from './ExchangeRates';

function Converter() {
  const [amount, setAmount] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('USD'); // THIS is the base currency that we can set to USD
  const [currency, setCurrency] = useState('EUR'); //this is the base TARGET currency we are converting to
  const [convertedAmount, setConvertedAmount] = useState(null); // To display the SUCCESSFUL converted value
  const [errorMessage, setErrorMessage] = useState(''); // To handle errors

  //Exchange Rate List functionality
  const fetchExchangeRates = async (base) => {
    try {
      const response = await fetch(`https://api.frankfurter.app/latest?from=USD`);
      const data = await response.json();
    } catch (error) {
      setErrorMessage('Error fetching exchange rates. Please try again.');
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, [baseCurrency]);

  //input change
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // changing base currency
  const handleBaseCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleConvert = async () => {
    if (!amount || isNaN(amount)) {
      setErrorMessage('Please enter a valid amount!');
      return;
    }

    try {

      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=USD&to=${currency}`
      );
      const data = await response.json();


      if (data.rates[currency]) {
        // Calculate the converted amount based on the fetched rate
        const rate = data.rates[currency];
        const convertedValue = amount * rate;
        setConvertedAmount(convertedValue);
        setErrorMessage(''); // Clear any previous errors
      } else {
        setErrorMessage('Currency not available.');
      }
    } catch (error) {
      setErrorMessage('Error converting currency. Please try again.');
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center pink">
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Amount in USD"
        className="form-control my-2" // Use Bootstrap's form-control class for styling
      />
      <label htmlFor="baseCurrency" className="my-2">Base</label>
      <select
        value={baseCurrency}
        onChange={handleBaseCurrencyChange}
        className="form-select my-2"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        {/* Add more currencies as needed */}
      </select>

      <label htmlFor="convertToCurrency" className="my-2">Converting To: </label>
      <select
        value={currency}
        onChange={handleCurrencyChange}
        className="form-select my-2" // Use Bootstrap's form-select class for styling
      >
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        {/* Add more currencies as needed */}
      </select>
      <button onClick={handleConvert} className="btn pink-dark my-2">Convert</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
      {convertedAmount !== null && <h3>Converted Amount: {convertedAmount.toFixed(2)} {currency}</h3>} {/* Display converted amount */}
    </div>
  );
}

export default Converter;
