import React, { useState, useEffect } from 'react';

const AirSample = () => {
    const [airData, setAirData] = useState({
        city: 'Lahore',
        aqi: 180, // Unhealthy for Sensitive Groups
        pm25: 95,
        pm10: 150,
        tips: '',
        healthTips: '',
    });

    // Set user tips based on AQI level
    useEffect(() => {
        let tips = '';
        let healthTips = '';
        if (airData.aqi <= 50) {
            tips = 'Air quality is good. It’s safe to go out today!';
            healthTips = 'No health impacts expected. Enjoy your day!';
        } else if (airData.aqi <= 100) {
            tips = 'Air quality is moderate. It’s generally safe to go out, but sensitive groups should take caution.';
            healthTips = 'If you have asthma or respiratory issues, consider limiting prolonged outdoor exertion.';
        } else if (airData.aqi <= 150) {
            tips = 'Air quality is unhealthy for sensitive groups. Consider limiting outdoor activities if you have health conditions.';
            healthTips = 'Sensitive groups (children, elderly, people with lung diseases) should reduce outdoor activities.';
        } else if (airData.aqi <= 200) {
            tips = 'Air quality is unhealthy. It’s best to limit outdoor activities today for everyone.';
            healthTips = 'Everyone may experience health effects; sensitive groups should avoid outdoor activities.';
        } else if (airData.aqi <= 300) {
            tips = 'Air quality is very unhealthy. Avoid outdoor activities.';
            healthTips = 'Serious health effects possible for sensitive groups. Limit outdoor activities.';
        } else {
            tips = 'Air quality is hazardous. Stay indoors and avoid outdoor exposure.';
            healthTips = 'Health alert! The entire population may experience more serious health effects.';
        }

        setAirData((prevData) => ({ ...prevData, tips, healthTips }));
    }, [airData.aqi]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Air Quality in {airData.city}</h1>
            <div className="w-full md:w-3/4 p-6 bg-white rounded-lg shadow-lg">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Air Quality Index (AQI): {airData.aqi}</h2>
                    <p className="text-gray-700">PM2.5: {airData.pm25} µg/m³</p>
                    <p className="text-gray-700">PM10: {airData.pm10} µg/m³</p>
                </div>

                <div className="bg-green-100 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-semibold">Health Advisory</h3>
                    <p className="text-gray-800">{airData.healthTips}</p>
                </div>

                <div className="bg-yellow-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Suggestions for Today</h3>
                    <p className="text-gray-800">{airData.tips}</p>
                </div>

                <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">How to Reduce Pollution</h3>
                    <ul className="list-disc list-inside text-gray-800">
                        <li>Use public transportation or carpool to reduce emissions.</li>
                        <li>Avoid burning trash or leaves, which contributes to air pollution.</li>
                        <li>Conserve energy at home by turning off unnecessary lights and appliances.</li>
                        <li>Encourage tree planting and the preservation of green spaces in urban areas.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AirSample;
