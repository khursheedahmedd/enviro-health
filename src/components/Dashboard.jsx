import React, { useState, useEffect } from 'react';
import { fetchAirQualityData, FetchNearestCityAirQuality } from './api';
import CountryList from './CountryList';
import AirQualityMap from './AirQualityMap';
import AirSample from './AirSample';

const Dashboard = () => {
    // const [airQuality, setAirQuality] = useState(null);
    // const [loading, setLoading] = useState(true);

    // // Sample coordinates (latitude, longitude). You can use user location or hardcode for now.
    // const lat = 51.505;  // Example latitude
    // const lon = -0.09;   // Example longitude

    // useEffect(() => {
    //     const getAirQuality = async () => {
    //         setLoading(true);
    //         const data = await fetchAirQualityData(lat, lon);
    //         setAirQuality(data);
    //         setLoading(false);
    //     };

    //     getAirQuality();
    // }, [lat, lon]);

    // if (loading) {
    //     return <div>Loading air quality data...</div>;
    // }

    // if (!airQuality) {
    //     return <div>Error fetching air quality data.</div>;
    // }

    // const { aqi } = airQuality.list[0].main; // AQI from the API response

    return (
        <>
            {/* <AirSample /> */}
            <AirQualityMap />
            {/* <AirQualityDashboard city="Lahore" /> */}
            {/* <CountryList /> */}
            {/* <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Real-Time Air Quality</h1>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <p className="text-lg">
                        <strong>AQI: </strong> {aqi}
                    </p>
                    <p className="text-sm text-gray-500">
                        Air Quality Index (1 = Good, 5 = Hazardous)
                    </p>
                </div>
            </div> */}
        </>
    );
};

export default Dashboard;
