import React, { useEffect, useState } from 'react';

function ExchangeRates() {
    const [rates, setRates] = useState({}); // State to hold exchange rates
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await fetch('https://api.frankfurter.app/latest');
                const data = await response.json();
                setRates(data.rates);
                setErrorMessage('');
            } catch (error) {
                setErrorMessage('Error fetching exchange rates. Please try again.');
            }
        };

        fetchExchangeRates();
    }, []); // why did we have an empty array? bc this will run once the component is ran/mounted

    return (
        <div className="pink-light">
            <h2>Exchange Rates</h2>
            {errorMessage && <p>{errorMessage}</p>}
            <table className="table">
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Rate</th>
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
        </div>
    );
}

export default ExchangeRates;
