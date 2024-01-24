import React from 'react'
import './SkillspageContent.css'
import { FaJava, FaPython, FaPhp, FaDatabase, FaNodeJs, FaBootstrap, FaGitAlt, FaDocker, FaLinux, FaWindows, FaMobile, FaBrain } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiExpress, SiMongodb, SiFirebase, SiPostgresql, SiAndroidstudio, SiVisualstudio, SiPostman, SiAnaconda, SiMacos } from "react-icons/si";
import { RiReactjsFill,RiTeamFill } from "react-icons/ri";
import { TbBrandReactNative,TbBulb } from "react-icons/tb";
import { IoLogoWebComponent } from "react-icons/io5";
import { MdRecordVoiceOver, MdLeaderboard } from "react-icons/md";





function SkillspageContent() {
  return (
    <React.Fragment>
      <div className="skills-content-container">
        <div className="skills-content-heading">
            Skills
        </div>
        <div className="skills-content-body">
            <div className="skill-container">
                <p className='skill-heading'>Programming Languages</p>
                <div className="container">
                    <div className="skills first-skill"><FaJava/> <p className='skill-title'>Java</p></div>
                    <div className="skills first-skill"><FaPython/> <p  className='skill-title'>Python</p></div>
                    <div className="skills first-skill"><SiCplusplus/> <p  className='skill-title'>C/C++</p></div>
                    <div className="skills first-skill"><SiJavascript/> <p  className='skill-title'>Javascript</p></div>
                    <div className="skills first-skill"><FaPhp/> <p  className='skill-title'>PHP</p></div>
                    <div className="skills first-skill"><FaDatabase/> <p  className='skill-title'>SQL</p></div>
                </div>
            </div>

            <div className="skill-container">
                <p className='skill-heading'>Technologies/Frameworks</p>
                <div className="container">
                    <div className="skills first-skill"><RiReactjsFill/> <p className='skill-title'>React.js</p></div>
                    <div className="skills first-skill"><TbBrandReactNative/> <p className='skill-title'>React Native</p></div>
                    <div className="skills first-skill"><FaNodeJs/> <p  className='skill-title'>Node.js</p></div>
                    <div className="skills first-skill"><SiExpress/> <p  className='skill-title'>Express.js</p></div>
                    <div className="skills first-skill"><SiMongodb/> <p  className='skill-title'>MongoDB</p></div>
                    <div className="skills first-skill"><SiFirebase/> <p  className='skill-title'>Firebase</p></div>
                    <div className="skills first-skill"><SiPostgresql/> <p  className='skill-title'>PostgreSQL</p></div>
                    <div className="skills first-skill"><FaBootstrap/> <p  className='skill-title'>Bootstrap</p></div>
                </div>
            </div>

            <div className="skill-container">
                <p className='skill-heading'>Developer Tools</p>
                <div className="container">
                    <div className="skills first-skill"><FaGitAlt/> <p className='skill-title'>Git</p></div>
                    <div className="skills first-skill"><SiAndroidstudio/> <p className='skill-title'>Android Studio</p></div>
                    <div className="skills first-skill"><SiVisualstudio/> <p  className='skill-title'>Visual Studio</p></div>
                    <div className="skills first-skill"><SiPostman/> <p  className='skill-title'>Postman</p></div>
                    <div className="skills first-skill"><SiAnaconda/> <p  className='skill-title'>Anaconda</p></div>
                    <div className="skills first-skill"><FaDocker/> <p  className='skill-title'>Docker</p></div>
                </div>
            </div>

            <div className="skill-container">
                <p className='skill-heading'>Platforms</p>
                <div className="container">
                    <div className="skills first-skill"><FaLinux/> <p className='skill-title'>Linux</p></div>
                    <div className="skills first-skill"><IoLogoWebComponent/> <p className='skill-title'>Web</p></div>
                    <div className="skills first-skill"><FaWindows/> <p  className='skill-title'>Windows</p></div>
                    <div className="skills first-skill"><SiMacos/> <p  className='skill-title'>Mac OS</p></div>
                    <div className="skills first-skill"><FaMobile/> <p  className='skill-title'>Mobile</p></div>
                </div>
            </div>

            <div className="skill-container">
                <p className='skill-heading'>Soft Skills</p>
                <div className="container">
                    <div className="skills first-skill"><MdRecordVoiceOver/> <p className='skill-title'>Communication</p></div>
                    <div className="skills first-skill"><MdLeaderboard/> <p className='skill-title'>Organizational Leaderships</p></div>
                    <div className="skills first-skill"><TbBulb/> <p  className='skill-title'>Analytical Thinking</p></div>
                    <div className="skills first-skill"><FaBrain/> <p  className='skill-title'>Problem Solving</p></div>
                    <div className="skills first-skill"><RiTeamFill/> <p  className='skill-title'>Team Player</p></div>
                </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SkillspageContent
