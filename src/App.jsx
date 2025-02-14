import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const smoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    };

    smoothScroll();

    // Form submission handler
    const contactForm = document.getElementById("contact-form");
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      console.log("Form submitted with data:", Object.fromEntries(formData));
      alert("Thank you for your message! I will get back to you soon.");
      contactForm.reset();
    };

    if (contactForm) {
      contactForm.addEventListener("submit", handleSubmit);
    }

    // Animate elements on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".project-card, .skill-item");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);

    // Initial animation check
    animateOnScroll();

    // Parallax effect for hero image
    const heroImage = document.querySelector(".hero-image");
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;
      heroImage.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    });

    // Typing effect for hero title
    const heroTitle = document.querySelector(".hero h1");
    const heroText = heroTitle.textContent;
    heroTitle.textContent = "";
    let i = 0;
    const typeWriter = () => {
      if (i < heroText.length) {
        heroTitle.textContent += heroText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
