import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NEWS_API_KEY = '3676a88b87144c9cb135ad77685fbe25'; // Replace with your actual News API key
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=environment AND pollution AND weather&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;

const RecentNews = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(NEWS_API_URL);
                setNewsArticles(response.data.articles);
            } catch (err) {
                setError('Failed to fetch news articles.');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <div>Loading recent news...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="mt-8 px-6">
            <h2 className="text-2xl font-bold mb-4">Recent News</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsArticles.map((article, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                    >
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <img
                                src={article.urlToImage || 'https://via.placeholder.com/400x200'}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                                <p className="text-gray-600 mb-2">{article.description}</p>
                                <p className="text-sm text-gray-500">{`Published at: ${new Date(article.publishedAt).toLocaleString()}`}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentNews;
