// Home page component that introduces the Book Management System project

// Import CSS styles specific to the Home (Hero) page
import "../styles/home.css";

// Import Link for navigation
import { Link } from "react-router-dom";

// Functional component for Home page
const Home = () => {
  return (
    <div className="hero-container">
      <div className="hero-shapes">
        <span className="shape shape-1"></span>
        <span className="shape shape-2"></span>
        <span className="shape shape-3"></span>
      </div>

      <div className="hero-card">
        <div className="hero-body">
          <div className="hero-copy">
            <span className="hero-badge">Modern book management for readers and teams</span>

            <h1 className="hero-title">Build your reading world with ease</h1>

            <p className="hero-subtitle">
              A full-stack web app powered by React, Node.js, Express, and MongoDB. Manage books, secure access, and stay organized from one polished dashboard.
            </p>

            <div className="hero-actions">
              <Link to="/register">
                <button className="auth-btn hero-btn">Register</button>
              </Link>
              <Link to="/login">
                <button className="auth-btn hero-btn hero-secondary">Login</button>
              </Link>
            </div>

            <p className="hero-note">Start by registering, then explore your book collection through a clean and responsive dashboard.</p>
          </div>

          <div className="hero-preview">
            <div className="preview-card">
              <div className="preview-header">
                <span>Library Dashboard</span>
                <span className="status-pill">Live</span>
              </div>

              <div className="preview-stack">
                <div className="preview-item">
                  <span className="preview-label">Books</span>
                  <strong>128</strong>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Authors</span>
                  <strong>42</strong>
                </div>
              </div>

              <div className="preview-list">
                <div className="preview-row">
                  <span>Modern JavaScript</span>
                  <span>Available</span>
                </div>
                <div className="preview-row">
                  <span>React Design Patterns</span>
                  <span>Borrowed</span>
                </div>
                <div className="preview-row">
                  <span>Express & APIs</span>
                  <span>Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-highlights">
          <div className="highlight-card">
            <h4>Secure Auth</h4>
            <p>JWT login and protected pages keep your data safe.</p>
          </div>
          <div className="highlight-card">
            <h4>Smart Controls</h4>
            <p>Add, edit, delete, search, and paginate with ease.</p>
          </div>
          <div className="highlight-card">
            <h4>Modern Stack</h4>
            <p>Built with React on the front end and MongoDB on the back end.</p>
          </div>
        </div>

        <div className="hero-grid">
          <div className="hero-panel">
            <h3>Features</h3>
            <ul>
              <li>Secure user registration and login</li>
              <li>Book CRUD operations</li>
              <li>Protected routes for authenticated users</li>
              <li>Search and pagination for quick navigation</li>
              <li>Responsive layout for mobile and desktop</li>
            </ul>
          </div>

          <div className="hero-panel">
            <h3>Tech Stack</h3>
            <ul>
              <li><strong>Frontend:</strong> React + Axios</li>
              <li><strong>Backend:</strong> Node.js + Express</li>
              <li><strong>Database:</strong> MongoDB + Mongoose</li>
              <li><strong>Auth:</strong> JWT</li>
              <li><strong>Hosting-ready:</strong> Vite + modern CSS</li>
            </ul>
          </div>
        </div>

        <p className="hero-footer">
          New users should <strong>register first</strong> and then login to begin managing books.
        </p>
      </div>
    </div>
  );
};

// Export Home component so it can be used in routing
export default Home;
