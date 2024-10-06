import React, { useState, useEffect } from 'react';
import { FetchNearestCityAirQuality } from './api'; // Adjust the path to where your function is located

const AirQualityDashboard = (props) => {
    const [airQualityData, setAirQualityData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const city = props.city;

    useEffect(() => {
        const getAirQualityData = async () => {
            setLoading(true);
            setError(null); // Reset error state before the API call
            try {
                const data = await FetchNearestCityAirQuality(city);
                setAirQualityData(data.data); // Set the air quality data from response
            } catch (err) {
                setError('Failed to fetch air quality data.');
            } finally {
                setLoading(false);
            }
        };

        getAirQualityData();
    }, []);

    if (loading) {
        return <div>Loading air quality data...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Air Quality Dashboard</h1>
            <h2 className="text-xl mt-4">{`${airQualityData.city}, ${airQualityData.state}, ${airQualityData.country}`}</h2>
            <div className="mt-2">
                <h3 className="font-semibold">Location Coordinates:</h3>
                <p>Latitude: {airQualityData.location.coordinates[1]}</p>
                <p>Longitude: {airQualityData.location.coordinates[0]}</p>
            </div>
            <h3 className="mt-4 font-semibold">Forecasts:</h3>
            <ul>
                {airQualityData.forecasts.map((forecast, index) => (
                    <li key={index} className="py-2 border-b">
                        <p>Time: {new Date(forecast.ts).toLocaleString()}</p>
                        <p>AQI US: {forecast.aqius}</p>
                        <p>AQI CN: {forecast.aqicn}</p>
                        <p>Temperature: {forecast.tp}°C</p>
                        <p>Humidity: {forecast.hu}%</p>
                        <p>Wind Speed: {forecast.ws} m/s</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AirQualityDashboard;
