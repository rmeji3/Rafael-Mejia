import React from 'react';
import github from '../assets/github.png';
import battleship from '../assets/battleship.png';
import messagingApp from '../assets/messagingApp.png';
import urhealth from '../assets/urhealth.png';


function Projects() {
    return (
        <div id="projects" className='text-white' style={{marginBottom: '7rem'}}>
            <h1 className='fw-bold pb-5 pt-5 text-center text-lg-start responsive-heading' data-aos="fade-up">Projects</h1>
            <div className='d-flex flex-column gap-5'>
                <div className="d-flex flex-nowrap justify-content-center" style={{ gap: '0' }} data-aos="fade-up">
                    <a
                    href="https://google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none text-center"
                    style={{ display: 'block', width: '50%' }}
                    >
                    <img src={urhealth} alt="UrHealth" className="img-fluid" />
                    <p className="m-0 mt-2 responsive-subheading">UrHealth</p>
                    <p className="m-0 responsive-body">Web Application</p>
                    </a>

                    <a
                    href="https://github.com/rmeji3/Battleship"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none text-center"
                    style={{ display: 'block', width: '50%' }}
                    >
                    <img src={battleship} alt="Battleship" className="img-fluid" />
                    <p className="m-0 mt-2 responsive-subheading">Battleship</p>
                    <p className="m-0 responsive-body">Online Game</p>
                    </a>
                </div>
                <div className="d-flex flex-nowrap justify-content-center" style={{ gap: '0' }} data-aos="fade-up">
                    <a
                    href="https://github.com/rmeji3/Messaging-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none text-center"
                    style={{ display: 'block', width: '50%' }}
                    >
                    <img src={messagingApp} alt="Messaging App" className="img-fluid" />
                    <p className="m-0 mt-2 responsive-subheading">Messaging App</p>
                    <p className="m-0 responsive-body">Software Application</p>
                    </a>

                    <a
                    href="https://github.com/rmeji3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none text-center"
                    style={{ display: 'block', width: '50%' }}
                    >
                    <img src={github} alt="github" className="img-fluid" />
                    <p className="m-0 mt-2 responsive-subheading">More on Github</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;