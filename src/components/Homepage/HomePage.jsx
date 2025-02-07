
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const Homepage = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the menu

  const themeColor = 'rgb(21, 138, 21)';

  const petQA = [
    {
      question: 'why my dog is vomiting yellow',
      answer: 'Yellow vomit in dogs typically indicates bile, often from an empty stomach. This could be due to hunger, gastritis, or liver issues. If persistent, consult a vet.'
    },
    {
      question: 'why my dog is vomiting green',
      answer: 'Green vomit might indicate grass consumption or possible intestinal blockage. If accompanied by lethargy, seek immediate veterinary care.'
    },
    {
      question: 'common bulldog health issues',
      answer: 'Bulldogs often face breathing problems, hip dysplasia, skin infections, cherry eye, and heat sensitivity due to their brachycephalic nature.'
    },
    {
      question: 'why my cat is vomiting white foam',
      answer: 'White foam vomiting in cats could indicate gastritis, hairballs, or more serious conditions like kidney disease. Persistent vomiting requires vet attention.'
    },
    {
      question: 'persian cat breathing problems',
      answer: 'Persians often have brachycephalic syndrome, leading to noisy breathing. Theyre also prone to polycystic kidney disease and eye issues.'
    },
    {
      question: 'german shepherd joint issues',
      answer: 'German Shepherds are prone to hip dysplasia, degenerative myelopathy, arthritis, and elbow dysplasia. Maintain healthy weight and consider joint supplements.'
    },
    {
      question: 'siamese cat behavior problems',
      answer: 'Siamese cats may develop excessive vocalization, separation anxiety, or compulsive behaviors. Provide mental stimulation and consistent routines.'
    },
    {
      question: 'dachshund back problems',
      answer: 'Dachshunds are prone to IVDD (intervertebral disc disease). Prevent jumping, maintain healthy weight, and use harnesses instead of neck collars.'
    },
    {
      question: 'ragdoll cat heart issues',
      answer: 'Ragdolls are predisposed to hypertrophic cardiomyopathy (HCM). Regular vet checkups and echocardiograms are recommended for early detection.'
    }
  ];

  const handleSearch = () => {
    if (!query.trim()) return;

    const foundAnswer = petQA.find((qa) =>
      qa.question.toLowerCase() === query.toLowerCase()
    );

    setResponse(
      foundAnswer
        ? foundAnswer.answer
        : 'Sorry, I can only answer specific pet health questions. Try asking about common dog/cat health issues.'
    );
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="homepage">
      <nav className="navbar" style={{ backgroundColor: themeColor }}>
        <div className="nav-left">
          <div
            className="logo"
            onClick={refreshPage}
            style={{ cursor: 'pointer' }}
          >
            PawFur
          </div>
        </div>
        <ul className="nav-right">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>

      <button
        className="menu-btn"
        onClick={toggleMenu}
        style={{ position: 'absolute', top: 'calc(2rem + 50px)', left: '10px' }}
      >
        Menu
      </button>
      {menuOpen && (
        <div className="menu-dropdown" ref={menuRef}>
          <ul className="menu-items">
            <li>Recent News</li>
            <li className="dropdown-menu">
              About Dogs
              <ul className="submenu">
                <li>Foods</li>
                <li>Breed Info</li>
                <li>Training</li>
              </ul>
            </li>
            <li className="dropdown-menu">
              About Cats
              <ul className="submenu">
                <li>Nutrition</li>
                <li>Behavior</li>
                <li>Grooming</li>
              </ul>
            </li>
          </ul>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      )}

      <div>
        <main className="content">
          <header className="hero">
            <h1>Welcome to PawFur</h1>
            <p>Your ultimate pet care companion</p>
          </header>

          <section className="search-bot">
            <h2>Ask Our Search Bot</h2>
            <div className="search-container">
              <input
                type="text"
                placeholder="Ask me anything about your pet..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="search-input"
                style={{ borderColor: themeColor }}
              />
              <button
                onClick={handleSearch}
                className="search-button"
                style={{ backgroundColor: themeColor }}
              >
                Search
              </button>
            </div>
            {response && (
              <div className="search-response" style={{ borderLeftColor: themeColor }}>
                <h3>Bot Response:</h3>
                <p>{response}</p>
              </div>
            )}
          </section>
        </main>
      </div>

      <footer>
        <p>&copy; 2025 PawFur. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
