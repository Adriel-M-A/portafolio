import React from "react";
import profileImage from "../images/profile.jpg";
import "./styles/AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me-container">
      <div className="profile-image-container">
        <img
          className="profile-image"
          src={profileImage}
          alt="Foto de perfil"
        />
      </div>
      <div className="name-container">
        <h3>MONTES ADRIEL</h3>
      </div>
      <div className="description-container">
        <p>
          Estudiante universitario con conocimientos en lenguajes como Java, C,
          C# y Python. Actualmente, mi enfoque se centra en el desarrollo web,
          especializándome tanto en el frontend como en el backend. Tengo
          experiencia en el uso de lenguajes y tecnologías como JavaScript,
          HTML, CSS, React.js y Django. Mi objetivo es ampliar mis conocimientos
          y destrezas en el desarrollo web para crear soluciones completas y
          robustas.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
