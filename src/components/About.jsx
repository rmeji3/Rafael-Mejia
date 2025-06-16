import React from "react";

function About() {
    return (
        <div
            id="about-me"
            className="d-flex flex-column gap-4 text-white pt-4 pt-md-5 pt-lg-6"
            style={{maxWidth: '800px' }}
            >
            <h1 className="fw-bold display-5 text-center text-lg-start responsive-heading " data-aos="fade-up" >Hello, I am Rafael Mejia.</h1>

            <p className="responsive-body text-center text-lg-start" data-aos="fade-up">
                I'm currently a junior majoring in Computer Science at the University of Illinois Chicago, where I've been building software systems.
                I've had the incredible opportunity to intern twice at Microsoft headquarters in Redmond, Washington. 
                These experiences gave me hands-on exposure to real-world engineering experiences.
                I'm passionate about web development and I'm continuing to grow through both academic work and side projects.
            </p>

            <p className="responsive-body text-center text-lg-start" data-aos="fade-up">
                Outside of academics and work, I love staying active and creative. 
                I enjoy playing video games and spend a lot of time coding, not just for school or work, but also for fun side projects.
                When I'm not at my desk, you'll probably find me at the gym, experimenting in the kitchen, or playing guitar. 
                I really like to mix technical interests with activities that keep me energized and happy.
            </p>
        </div>

    );
}

export default About;

