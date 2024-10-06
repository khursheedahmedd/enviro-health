import axios from 'axios';


const API_KEY = '68cf052bdb57899ba0cbb93af8024d95';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/air_pollution';

// Function to fetch air quality data based on latitude and longitude
export const fetchAirQualityData = async (lat, lon) => {
    try {
        const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching air quality data:', error);
        return null;
    }
};


const AIR_VISUAL_API_KEY = 'bcbc5efb-e4e4-4456-b58b-979a7d268862'; // Replace with your actual API key

// Function to fetch countries from AirVisual API
export const fetchCountries = async () => {
    try {
        const response = await axios.get(`http://api.airvisual.com/v2/pakistan?key=${AIR_VISUAL_API_KEY}`);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error; // Optionally re-throw the error for further handling
    }
};

export const FetchNearestCityAirQuality = async (city) => {
    try {
        const response = await axios.get(`http://api.airvisual.com/v2/${city}?key=${AIR_VISUAL_API_KEY}`);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error fetching nearest city air quality:', error);
        throw error; // Optionally re-throw the error for further handling
    }
};
