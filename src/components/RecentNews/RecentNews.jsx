import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RecentNews.css"; // Import your styling for this page

const RecentNews = () => {
  // Sample news data (replace this with dynamic content)
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Fetching recent news (replace with actual API call or data fetching logic)
    const fetchNews = async () => {
      // Simulating fetched data
      const news = [
        {
          id: 1,
          title: "New Cat Breed Discovered!",
          content: "A new breed of cat has been discovered in the wild, and it's unlike anything we've seen before. This new breed, known for its distinct coat patterns and playful nature, is sure to capture the hearts of pet lovers everywhere. The discovery was made by a team of researchers who were studying cat behavior in remote areas.",
          date: "2025-02-18",
        },
        {
          id: 2,
          title: "Dog Training Tips for Beginners",
          content: "Training your dog can be challenging, but with these tips, you'll be able to build a strong bond and ensure good behavior in no time. Start with basic commands, reward-based training, and consistency. Dogs are quick learners when you apply the right approach!",
          date: "2025-02-15",
        },
        {
          id: 3,
          title: "How to Choose the Right Pet Food",
          content: "Choosing the right food for your pet is essential for their health and well-being. Consider their breed, age, activity level, and any food sensitivities they might have. Always consult with your veterinarian before making any significant changes to their diet.",
          date: "2025-02-12",
        },
      ];

      setNewsData(news);
    };

    fetchNews();
  }, []);

  const [expandedPost, setExpandedPost] = useState(null);

  const togglePostExpansion = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <div className="recent-news-container">
      <h1 className="recent-news-title">Recent News</h1>

      {newsData.length === 0 ? (
        <p>No recent news available. Check back later!</p>
      ) : (
        <div className="news-list">
          {newsData.map((news) => (
            <div key={news.id} className="news-item">
              <h2 className="news-item-title">{news.title}</h2>
              <p className="news-item-content">
                {expandedPost === news.id
                  ? news.content
                  : `${news.content.slice(0, 150)}...`}
              </p>
              <button
                className="see-more-btn"
                onClick={() => togglePostExpansion(news.id)}
              >
                {expandedPost === news.id ? "See Less" : "See More"}
              </button>
              <span className="news-item-date">{news.date}</span>
              <Link to={`/news/${news.id}`} className="read-more-link">
                Read more
              </Link>
            </div>
          ))}
        </div>
      )}

      <Link to="/home" className="back-home-button">
        Back to Home
      </Link>
    </div>
  );
};

export default RecentNews;
