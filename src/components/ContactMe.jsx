import React from 'react';

function ContactMe() {
  return (
    <div
      id="contact-me"
      className="bg-white w-100 d-flex flex-column gap-2 px-3 px-md-5 pt-4"
    >
      <a
        href="mailto:Rafaelm120403@gmail.com"
        className="fw-semibold text-center responsive-subheading"
        style={{ color: '#0C0F19', textDecoration: 'none' }}
      >
        Rafaelm120403@gmail.com
      </a>

      <a
        href="tel:+17089429844"
        className="fw-semibold text-center d-block responsive-subheading"
        style={{ textDecoration: 'none', color: '#0C0F19' }}
      >
        +1 (708) 942-9844
      </a>

      <div className="d-flex justify-content-center gap-4 flex-wrap">
        <a href="https://github.com/rmeji3" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github" style={{ fontSize: '1.8rem', cursor: 'pointer', color: '#0C0F19' }}></i>
        </a>
        <a href="https://www.linkedin.com/in/rafaelmejia3/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin" style={{ fontSize: '1.8rem', cursor: 'pointer', color: '#0C0F19' }}></i>
        </a>
        <a href="https://www.instagram.com/wa.fuh/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram" style={{ fontSize: '1.8rem', cursor: 'pointer', color: '#0C0F19' }}></i>
        </a>
      </div>

      <p className="text-center pt-4" style={{ fontSize: '0.9rem' }}>
        By Rafael Mejia
      </p>
    </div>
  );
}

export default ContactMe;
