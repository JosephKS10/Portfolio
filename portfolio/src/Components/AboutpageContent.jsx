/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import './AboutpageContent.css'

function AboutpageContent() {
  return (
    <React.Fragment >
        <div className="about-container">
      <div className="about-photo-container">
        <img src="/about.jpeg" alt="about-photo" className="profile-photo" />
      </div>
      <div className="about-content-container">
        <div className="about-content-heading">
                <p className='heading'>Hello</p><p className='heading there'> there, </p><p className='heading hand'>👋</p>
        </div>
        <div className="about-content-body">
            "Hello there! I'm Joseph Kalayathankal Saji, a final year student at Vellore Institute of Technology, Vellore pursuing a B.Tech in Computer Science with a specialization in Bioinformatics. I have a strong passion for both computer science and biology, and I'm excited to bridge the gap between these two fields. <br /><br />

            Throughout my academic journey, I have gained expertise in a range of technologies and frameworks. I am well-versed in React.js, Node.js, Express, and MongoDB, allowing me to develop efficient and interactive web applications. Additionally, my proficiency in Python and Django empowers me to build robust and scalable solutions. <br /><br />

            My primary interest lies in leveraging my programming skills to solve complex biological problems. I believe that the integration of computer science and bioinformatics has the potential to revolutionize healthcare and scientific research. By employing computational techniques, I aim to contribute to the development of innovative solutions for analyzing biological data, discovering patterns, and deriving meaningful insights. <br /><br />

            I am an avid learner, always eager to explore emerging technologies and stay updated with the latest advancements in the field. I enjoy collaborating with like-minded individuals, as I believe teamwork and diverse perspectives foster creativity and enable us to tackle challenges more effectively. <br /><br />

            Beyond academics, I actively participate in hackathons, coding competitions, and open-source projects, where I constantly enhance my problem-solving and collaborative skills. These experiences have sharpened my ability to work under pressure, think critically, and deliver high-quality results within deadlines." <br />
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}

export default AboutpageContent;