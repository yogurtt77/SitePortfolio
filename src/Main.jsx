import React from "react";

export default function Main() {
  return (
    <main>
      <section id="home" class="hero">
        <div className="hero-content">
          <h1>Absat Nurlybek</h1>
          <h2>Frontend Developer</h2>
          <a href="#contact" className="cta-button">
            Get in touch
          </a>
        </div>
        <div className="hero-image"></div>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>
          A dedicated Software Engineer and student at Astana IT University,
          excelling in developing outstanding Web Pages and Web Applications. My
          portfolio reflects a strong commitment to excellence and innovative
          problem-solving, establishing me as a valuable asset in the IT
          industry.
        </p>
      </section>
      <section id="skills">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skill-item">
            <i className="fab fa-html5"></i> HTML
          </div>
          <div className="skill-item">
            <i className="fab fa-css3-alt"></i> CSS
          </div>
          <div className="skill-item">
            <i className="fab fa-js"></i> JavaScript
          </div>
          <div className="skill-item">
            <i className="fab fa-react"></i> React
          </div>
          <div className="skill-item">
            <i className="fab fa-tailwind"></i> Tailwind
          </div>
          <div className="skill-item">
            <i className="fab fa-git-alt"></i> Git
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <div className="project-image-1"></div>

            <div className="project-content">
              <h3>React-Shop</h3>
              <p>
                Built an React.js, JavaScript (ES6+), HTML5, CSS3, and
                Bootstrap. <br />
                The store sells household goods and provides features such as
                product filtering, sorting, category-based navigation, shopping
                cart, and seamless navigation between product details and cart
                pages.
              </p>
              <a href="/" className="project-link">
                View Project
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image-2"></div>
            <div className="project-content">
              <h3>Music Player</h3>
              <p>
                Built an interactive music player website with JavaScript, GSAP,
                HTML5, and CSS3. <br />
                Added smooth scrolling and synchronized animations for a dynamic
                user experience.
              </p>

              <a href="/" className="project-link">
                View Project
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image-3"></div>
            <div className="project-content">
              <h3>Weather App</h3>
              <p>
                Weather App Built a responsive weather app using Vanilla
                JavaScript, HTML5, and CSS3.
                <br />
                ntegrated real-time weather data from the OpenWeatherMap API.
                <br />
                Designed a modern UI with glass-morphism and smooth CSS3
                animations.
              </p>
              <a href="/" className="project-link">
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <h2>Get in Touch</h2>
        <form id="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}
