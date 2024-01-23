import React from 'react'
import { BiSolidFileBlank } from "react-icons/bi";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import '../Pages/Homepage.css'
function HomepageContent() {
  return (
    <React.Fragment>
        <div className="home-content-body">
              <div className="profile-photo-container">
                <img src="/profile.jpeg" alt="" className="profile-photo" />
              </div>
              <div className="profile-content-container">
                <p className="profile-content-heading">Welcome to My Portfolio</p>
                <p className="profile-content-body">
                  Hey I am Joseph Kalayathankal Saji, a final year Computer Science
                  student at the Vellore Institute of Technology, Vellore. I am a full
                  stack developer with a passion for building beautiful and functional
                  applications.
                </p>
                <br />
                <div className="socials-container">
                <a href="https://github.com/JosephKS10" className="socials" target="_blank" rel="noopener noreferrer">
                <FaGithub /> <p>Github</p>
              </a>
              <a href="https://www.linkedin.com/in/josephks10/" className="socials linkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> <p> LinkedIn</p>
              </a>
                  <div className="socials resume">
                    <BiSolidFileBlank />
                    <p>Resume</p>
                  </div>
                </div>
              </div>
            </div>
    </React.Fragment>
  )
}

export default HomepageContent
