import React, { useState, useEffect } from 'react';
import { fetchCountries } from './api';

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCountries = async () => {
            setLoading(true);
            setError(null); // Reset error state before the API call
            try {
                const data = await fetchCountries();
                setCountries(data.data); // Assuming the API response has a `data` field containing countries
            } catch (err) {
                setError('Failed to fetch countries.');
            } finally {
                setLoading(false);
            }
        };

        getCountries();
    }, []);

    if (loading) {
        return <div>Loading countries...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">Countries</h1>
            <ul>
                {countries.map((country, index) => (
                    <li key={index} className="py-1">{country}</li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;
