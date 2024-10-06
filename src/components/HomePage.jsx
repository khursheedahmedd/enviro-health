import React from 'react';

const HomePage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h1 className="text-5xl font-bold text-center text-green-600">AECS </h1>
                <p className="mt-4 text-xl text-gray-700 text-center">
                    Get real-time insights into environmental data such as air quality, pollution levels, and more.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-blue-600">Why Monitor Air Quality?</h2>
                    <p className="mt-2 text-gray-600">
                        Air quality significantly impacts our health and well-being. Poor air quality can lead to respiratory issues, heart diseases, and other health problems. By monitoring air quality, we can take necessary precautions to protect ourselves and our loved ones.
                    </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-yellow-600">Understanding Pollution Levels</h2>
                    <p className="mt-2 text-gray-600">
                        Pollution affects not only the environment but also our daily lives. Understanding pollution levels in our surroundings helps us make informed decisions about outdoor activities, ensuring our safety and health.
                    </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-green-600">The Impact of Climate Change</h2>
                    <p className="mt-2 text-gray-600">
                        Climate change is one of the most pressing issues of our time. Monitoring weather patterns and environmental changes can help us understand the effects of climate change and encourage action to mitigate its impacts.
                    </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-purple-600">Stay Informed with Real-Time Data</h2>
                    <p className="mt-2 text-gray-600">
                        Our dashboard provides real-time updates on air quality and weather conditions, helping you stay informed and make better choices for yourself and your community.
                    </p>
                </div>
            </div>

            <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800">Join Us in Making a Difference</h2>
                <p className="mt-2 text-gray-600">
                    Together, we can work towards a healthier planet. Monitor, educate, and take action for a sustainable future!
                </p>
            </div>
        </div>
    );
};

export default HomePage;
