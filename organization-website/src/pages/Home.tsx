import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to Our Organization</h1>
        <p>Empowering communities through technology and innovation</p>
      </header>
      
      <section className="features">
        <div className="feature-card">
          <h2>Our Mission</h2>
          <p>To provide innovative solutions and support for community growth</p>
        </div>
        <div className="feature-card">
          <h2>Our Vision</h2>
          <p>Creating a better future through collaboration and education</p>
        </div>
        <div className="feature-card">
          <h2>Our Values</h2>
          <p>Integrity, Innovation, and Community Focus</p>
        </div>
      </section>
    </div>
  );
};

export default Home;