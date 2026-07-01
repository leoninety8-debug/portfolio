import React from 'react';
import { MapPin, Phone, Mail, TerminalSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-name">FASHLI HAFIY EDRIAN</h1>
          <h2 className="hero-role">IT Functional Business Analyst</h2>
          <p className="hero-description">
            IT Functional Business Analyst with a proven track record driving digital transformation across more than 30 strategic initiatives. Skilled at improving operational efficiency, delivering reliable technical support, and collaborating effectively with cross-functional teams in fast-paced environments.
          </p>
          <div className="hero-contact">
            <div className="contact-item">
              <MapPin className="contact-icon" size={20} />
              <span>Tangerang Selatan, Banten</span>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" size={20} />
              <span>+62 811 9909 985</span>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" size={20} />
              <span>fashliedrian.work@gmail.com</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#experience" className="btn btn-primary">View Experience</a>
            <a href="#projects" className="btn btn-secondary">My Projects</a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-bg-glow"></div>
          <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Fashli Hafiy Edrian" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
