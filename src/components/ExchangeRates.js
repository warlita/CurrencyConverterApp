import React, { useEffect, useState } from 'react';

function ExchangeRates({ baseCurrency }) {
    const [rates, setRates] = useState({}); // State to hold exchange rates the "hook"
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
               
                const response = await fetch(`https://api.frankfurter.app/latest?from=USD`);
                
               
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                // Check if rates exist in the data
                if (data && data.rates) {
                    setRates(data.rates);
                    setErrorMessage(''); 
                } else {
                    throw new Error('No rates found');
                }
            } catch (error) {
                
                setErrorMessage('Error fetching exchange rates. Please try again.');
                setRates({}); // Reset rates in case of error
            }
        };

        fetchExchangeRates();
    }, [baseCurrency]); 

    return (
        <div className="pink-light">
            <h2>Exchange Rates for USD</h2>
            {errorMessage && <p>{errorMessage}</p>}
            {Object.keys(rates || {}).length === 0 ? (
                <p>Loading rates...</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Country Code</th>
                            <th>USD Conversion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(rates).map(([currency, rate]) => (
                            <tr key={currency}>
                                <td>{currency}</td>
                                <td>{rate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ExchangeRates;
