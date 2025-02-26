import React from 'react'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'


const About = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <div className='aboutsec'>
                <h3>LET ME INTRODUCE MY SELF</h3>
                <h2>About me</h2>
                <h4>I am enthusiastic software developer.My passion towards computer science<br></br>
                    made me as a frontend developer.Tasting latest technologies and<br></br>
                    improving knowledge on various domains in IT are my hobbies</h4>
            </div>
            <div className='education'>
                <h2>Education</h2>
                <h4>> I am currently pursuing my B.Tech 4th year in <br></br>
                Computer Science and Engineering from<br></br>
                 Annamacharya Institute Of Technology And Sciences</h4>
                    <h4>> I Completed my Intermediate (MPC) at Narayana Jr College,Anantapur<br></br>
                  grade 9.01<br></br></h4>
                    <h4>> I Completed SSC at Sri Chaitanya Techno School,Dharmavaram<br></br>
                    grade 9.0<br></br></h4>
            </div>
            <Skills />
            <Project/>
            <Contact/>
        </div>

    )
}

export default About;