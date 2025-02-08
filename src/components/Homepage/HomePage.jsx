import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const Homepage = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // Sidebar toggle state
  const [submenuOpen, setSubmenuOpen] = useState({ dogs: false, cats: false }); // Submenu states
  const menuRef = useRef(null);

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

  const interestingFacts = [
    {
      title: 'Do You Know?',
      fact: 'Dogs have three eyelids to protect and lubricate their eyes.'
    },
    {
      title: 'Fun Fact',
      fact: 'Cats can rotate their ears 180 degrees to hear better.'
    },
    {
      title: 'Did You Know?',
      fact: 'A dog\'s sense of smell is 40 times better than a human\'s.'
    },
    {
      title: 'Amazing Fact',
      fact: 'The purring of a cat can help reduce stress in humans.'
    },
    {
      title: 'Surprising Fact',
      fact: 'Dogs\' nose prints are unique, much like human fingerprints.'
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
    setMenuOpen((prev) => !prev); // Toggle the sidebar state
  };

  const toggleSubmenu = (key) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [key]: !prev[key] // Toggle the specific submenu
    }));
  };

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu if clicked outside
        setSubmenuOpen({ dogs: false, cats: false }); // Close submenus
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
          <div className="logo" onClick={refreshPage} style={{ cursor: 'pointer' }}>
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

      <button className="menu-toggle-btn" onClick={toggleMenu}>
        {menuOpen ? 'Menu' : 'Menu'}
      </button>

      <div className={`sidebar ${menuOpen ? 'open' : ''}`} ref={menuRef}>
        <ul className="menu-items">
          <li>Recent News</li>
          <li className="dropdown-menu">
            <div onClick={() => toggleSubmenu('dogs')} className="dropdown-toggle">
              About Dogs
            </div>
            <ul className={`submenu ${submenuOpen.dogs ? 'open' : ''}`}>
              <li>Foods</li>
              <li>Breed Info</li>
              <li>Training</li>
            </ul>
          </li>
          <li className="dropdown-menu">
            <div onClick={() => toggleSubmenu('cats')} className="dropdown-toggle">
              About Cats
            </div>
            <ul className={`submenu ${submenuOpen.cats ? 'open' : ''}`}>
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

      <main className={`main-content ${menuOpen ? 'shifted' : ''}`}>
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

        <section className="facts-section">
          <h2>Do You Know?</h2>
          <div className="facts-grid">
            {interestingFacts.map((item, index) => (
              <div className="fact-card" key={index}>
                <h3>{item.title}</h3>
                <p>{item.fact}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 PawFur. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
