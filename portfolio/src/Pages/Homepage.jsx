import React, {useState, useEffect} from 'react'
import './Homepage.css'
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";
import { FaGithub, FaGraduationCap, FaLightbulb} from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiToolboxDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

// Component to be used
import HomepageContent from '../Components/HomepageContent';
import AboutpageContent from '../Components/AboutpageContent';
import SkillspageContent from '../Components/SkillspageContent';



function Homepage() {
    const [theme, setTheme] = useState('light');
    const [activeContent, setActiveContent] = useState('home');

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
  
    return (
      <React.Fragment>
        <div className="home-container">
          <div className="menu-container">
            <div className="menu-header">
              <p>Developer</p>
            </div>
            <div className="menu-content-container">
              <ul>
               <li onClick={() => setActiveContent('home')}>
                <IoHomeOutline className="icons" /> Home
              </li>
              <li onClick={() => setActiveContent('about')}>
                <IoPersonOutline className="icons" /> About
              </li>
                <li onClick={() => setActiveContent('skills')}>
                  <LuBrainCircuit className="icons" /> Skills
                </li>
                <li>
                  <FaGithub className="icons" /> Project
                </li>
                <li>
                  <TfiCup className="icons" /> Achievements
                </li>
                <li>
                  <PiToolboxDuotone className="icons" /> Experience
                </li>
                <li>
                  <FaGraduationCap className="icons" /> Education
                </li>
              </ul>
            </div>
            <div className="menu-footer">
              <CgProfile style={{ fontSize: 40, marginRight: 8 }} />
              <p>Joseph Kalayathankal Saji</p>
            </div>
          </div>
          <div className="home-content-container">
            <div className="home-content-header">
              <div className="bulb-container" onClick={toggleTheme}>
                <FaLightbulb className={`bulb ${theme}`} />
              </div>
            </div>
            {activeContent === 'home' ? <HomepageContent /> : null}
          {activeContent === 'about' ? <AboutpageContent /> : null}
          {activeContent === 'skills' ? <SkillspageContent /> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
  
  export default Homepage;