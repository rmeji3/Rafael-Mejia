import React from "react";
import ProfileImage from "./ProfileImage";

//This is a functional component that will return a header element.

function Header() {
    const scrollToSection = (rem, id) => {
        const element = document.getElementById(id);
      
        // Convert rem to px
        const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const offsetInRem = rem; 
        const yOffset = -remInPx * offsetInRem;
      
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    return (
        <div id="header" className="d-flex flex-column gap-4 gap-lg-5 " style={{paddingTop: '4rem'}}>
            <header className="d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center text-white w-100">
                {/* left side */}
                <div className="d-flex flex-column w-50 gap-2 gap-lg-5 align-items-center align-items-lg-start">
                    <h1 className="fw-medium responsive-title text-lg-start text-center">I'm a freelance web developer based in Chicago.</h1>
                    <button className="border-0 responsive-button"
                    onClick={() => {
                        const section = document.getElementById('contact-me');
                        section?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    >let's work</button>
                </div>

                {/* right side */}
                <div className="d-flex justify-content-center justify-content-lg-end w-100 w-lg-50">
                    <div className="d-flex flex-column flex-lg-row align-items-center gap-4 gap-lg-5" style={{gap: '12rem'}}>
                        <ProfileImage />
                        <div className="d-flex flex-row flex-lg-column gap-2">
                            <a href="https://github.com/rmeji3" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <i className="bi bi-github" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
                            </a>
                            <a href="https://www.linkedin.com/in/rafaelmejia3/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <i className="bi bi-linkedin" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
                            </a>
                            {/* instagram */}
                            <a href="https://www.instagram.com/wa.fuh/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <i className="bi bi-instagram" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
                            </a>
                        </div>
                    </div>
                </div>
            
            </header>
            <div className="border-top">
                <div className="pt-4">
                    <nav>
                        <ul className="d-flex justify-content-center responsive-nav list-unstyled">
                            <li><a  style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}
                            onClick={() => scrollToSection(4, 'about-me')}
                            >about me</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}
                            onClick={() => scrollToSection(4, 'projects')}
                            >projects</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}
                            onClick={() =>{document.getElementById('contact-me')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                            >contact me</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;