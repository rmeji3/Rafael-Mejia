import React from 'react';
import Placeholder1 from '../assets/placeholder1.png';
import Placeholder2 from '../assets/placeholder2.png';

function Projects() {
    return (
        <div id="projects" className='text-white' style={{marginBottom: '6rem'}}>
            <h1 className='fw-bold pb-5 pt-5 text-center text-lg-start responsive-heading' data-aos="fade-up">Projects</h1>
            <div>
                <div className="d-flex flex-nowrap justify-content-center" style={{ gap: '0' }} data-aos="fade-up">
                    <a
                    href="https://google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none text-center"
                    style={{ display: 'block', width: '50%' }}
                    >
                    <img src={Placeholder1} alt="UrHealth" className="img-fluid" />
                    <p className="m-0 mt-2 responsive-subheading">UrHealth</p>
                    <p className="m-0 responsive-body">Web Application</p>
                    </a>

                    <a
                    href="https://google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none text-center"
                    style={{ display: 'block', width: '50%' }}
                    >
                    <img src={Placeholder2} alt="UrHealth" className="img-fluid" />
                    <p className="m-0 mt-2 responsive-subheading">Battleship</p>
                    <p className="m-0 responsive-body">Online Game</p>
                    </a>
                </div>
                <div className="d-flex flex-nowrap justify-content-center" style={{ gap: '0' }} data-aos="fade-up">
                    <a
                    href="https://google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none text-center"
                    style={{ display: 'block', width: '50%' }}
                    >
                    <img src={Placeholder1} alt="UrHealth" className="img-fluid" />
                    <p className="m-0 mt-2 responsive-subheading">Image Translator</p>
                    <p className="m-0 responsive-body">Computer Vision</p>
                    </a>

                    <a
                    href="https://github.com/rmeji3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none text-center"
                    style={{ display: 'block', width: '50%' }}
                    >
                    <img src={Placeholder2} alt="UrHealth" className="img-fluid" />
                    <p className="m-0 mt-2 responsive-subheading">More on Github</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;