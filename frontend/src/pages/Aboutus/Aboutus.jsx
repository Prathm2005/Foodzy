import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <h1>About Us</h1>
      
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Foodzy was founded with the vision of delivering delicious and
          wholesome food to every table. Over the years, we have grown into a
          trusted brand known for our variety of meals, commitment to quality,
          and passion for food. We believe in making food that not only satisfies
          the stomach but also nourishes the soul.
        </p>
      </section>
      
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a seamless and convenient food experience to
          people, ensuring that everyone has access to quality meals at their
          fingertips. We strive to create a culture of excellence, driven by
          customer satisfaction and innovative culinary techniques.
        </p>
      </section>
      
      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          To be the leading food delivery service that brings the joy of great
          meals to every home, while continuously innovating and improving our
          offerings. Our goal is to expand globally, creating a diverse food
          culture that unites people through great taste and convenience.
        </p>
      </section>
      
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          <strong>Address:</strong>  CRPF Camp, Talegaon Dabhade, Maharashtra.
        </p>
        <p>
          <strong>Phone:</strong> +(91) 9356727487
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:foodzy@gmail.com" className="email-link">foodzy@gmail.com</a>
        </p>
      </section>
      <section className="map-section">
        <h2>Find Us</h2>
        <div className="map-container">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.915118126708!2d73.6569389!3d18.7216906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1e0f7af26a7%3A0xbc1e882649230580!2sCRPF%20Camp%2C%20Talegaon%20Dabhade%2C%20Maharashtra%20410506!5e0!3m2!1sen!2sin!4v1615320159267!5m2!1sen!2sin"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Aboutus;
