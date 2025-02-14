import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';






const Homepage = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({ dogs: false, cats: false });
  
  const [newPost, setNewPost] = useState({ title: '', category: '', content: '', upvotes: 0, downvotes: 0 });
  const [showForm, setShowForm] = useState(false); // Manage form visibility
  const [searchPosts, setSearchPosts] = useState([]);  // This will hold posts that should only appear via search
  const [showPosts, setShowPosts] = useState(false);  // Track if posts should be shown
  const [posts, setPosts] = useState([]);
  const [searchResult, setSearchResult] = useState(null); // Stores the post or QA object

  
  const menuRef = useRef(null);
console.log(showForm); // Check if the form visibility changes
console.log(newPost); // Check the current state of the form inputs
console.log(posts); // Check if the posts array updates after submission

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

  
  

  const handlePostSubmit = () => {
    // Trim and validate input fields
    const trimmedTitle = newPost.title.trim();
    const trimmedContent = newPost.content.trim();
    
    if (!trimmedTitle || !newPost.category || !trimmedContent) {
      alert("Please fill in all the fields (Title, Category, and Content) before submitting.");
      return;
    }
  
    // Create the updated post
    const updatedPost = { 
      ...newPost, 
      id: Date.now(), 
      title: trimmedTitle, 
      content: trimmedContent 
    };
  
    // Add post to posts and searchPosts
    setPosts((prevPosts) => [...prevPosts, updatedPost]);
    setSearchPosts((prevSearchPosts) => [...prevSearchPosts, updatedPost]);
  
    // Reset the form fields
    setNewPost({ title: '', category: '', content: '', upvotes: 0, downvotes: 0 });
  
    // Hide the post form after submission
    setShowForm(false);
  
    // Show success message
    alert("Your post has been successfully updated!");
  };
  // Function to handle upvote
  const handleUpvote = (post) => {
    post.upvotes += 1;
    setSearchPosts([...searchPosts]); // Update the post list to reflect the changes
    setSearchResult({ type: "post", data: post }); // Update the current post view
  };
  
  const handleDownvote = (post) => {
    post.downvotes += 1;
    setSearchPosts([...searchPosts]); // Update the post list to reflect the changes
    setSearchResult({ type: "post", data: post }); // Update the current post view
  };
  
  
  const handleSearch = () => {
    if (!query.trim()) {
      // Show default response (petQA) when no search term is entered
      const defaultQA = { question: "Ask me pets-related questions!", answer: "" };
  
      setSearchResult({
        type: "qa",
        data: defaultQA,
      });
      return;
    }
  
    // Check if a post matches the search query
    const foundPost = posts.find(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase())
    );
  
    if (foundPost) {
      setSearchResult({ type: "post", data: foundPost });
      return;
    }
  
    // Check if any petQA matches the search query
    const foundQA = petQA.find((qa) =>
      qa.question.toLowerCase().includes(query.toLowerCase())
    );
  
    if (foundQA) {
      setSearchResult({ type: "qa", data: foundQA });
    } else {
      // If no results found in both posts and QA, show a default message
      setSearchResult({
        type: "qa",
        data: { question: "No matching questions found", answer: "Ask me pets-related questions!" },
      });
    }
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
          {/* Sidebar Toggle */}
      <button className="menu-toggle-btn" onClick={toggleMenu}>
        Menu
        
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
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
          <div className="logo" onClick={refreshPage} style={{ cursor: 'pointer' }}>
            PawFur
          </div>
        </div>
        <div className="user-profile">
      <Link to="/userpage">
        <img
          src="https://via.placeholder.com/40"
          alt="User Profile"
          className="user-icon"
        />
      </Link>
    </div>

    <ul className="nav-right">
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </ul>
</nav>
      
      <main className={`main-content ${menuOpen ? 'shifted' : ''}`}>
        <header className="hero">
          <h1>Welcome to PawFur</h1>
          <p>Your ultimate pet care companion</p>
        </header>

        {/* Add Post Button */}
<button className="add-post-btn" onClick={() => setShowForm(true)}>
  Add Post
</button>
{/* Add Post Form */}
{showForm && (
  <div className="add-post-form">
    <input
      type="text"
      placeholder="Post Title"
      value={newPost.title}
      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
    />
    
    {/* Category Dropdown */}
    <select
      value={newPost.category}
      onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
      className="category-dropdown"
    >
      <option value="">Select Category</option>
      <option value="Dogs">Dogs</option>
      <option value="Cats">Cats</option>
    </select>

    <textarea
      placeholder="Content"
      value={newPost.content}
      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
    />
    
    <div className="form-actions">
      <button className="submit-btn" onClick={handlePostSubmit}>
        Submit Post
      </button>
      <button className="cancel-btn" onClick={() => setShowForm(false)}>
        Cancel
      </button>
    </div>
  </div>
)}
        {/* Search Bot */}
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

  <div className="search-response" style={{ borderLeftColor: themeColor }}>
  {searchResult ? (
    searchResult.type === "post" ? (
      <div>
        <h4>{searchResult.data.title}</h4>
        <p>Category: {searchResult.data.category}</p>
        <p>{searchResult.data.content}</p>

        <p className="look">Look votes for the help!</p>

        {/* Render Verified or Not Helpful based on upvotes/downvotes */}
        {searchResult.data.upvotes > 5 && (
          <p className="verified-label">
            <span role="img" aria-label="star">⭐</span> Verified
          </p>
        )}
        {searchResult.data.downvotes > 5 && (
          <p className="not-helpful-label">
            <span role="img" aria-label="poop">💩</span> Not Helpful
          </p>
        )}

        <button onClick={() => handleUpvote(searchResult.data)}>
          Upvote ({searchResult.data.upvotes})
        </button>
        <button onClick={() => handleDownvote(searchResult.data)}>
          Downvote ({searchResult.data.downvotes})
        </button>
      </div>
    ) : (
      <div>
        <p>{searchResult.data.answer}</p>
      </div>
    )
  ) : (
    <p>Type something to search!</p>
  )}
</div>
</section>
        <section className="facts-section">
    <h2>Interesting Facts</h2>
    <div className="facts-grid">
      {interestingFacts.map((fact, index) => (
        <div key={index} className="fact-card">
          <h3>{fact.title}</h3>
          <p>{fact.fact}</p>
        </div>
      ))}
    </div>
  </section>
  <footer className="footer">
  <Link to="/logout" className="logout">Logout</Link>
</footer>
      </main>
    </div>
  );
};

export default Homepage;