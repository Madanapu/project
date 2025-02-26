import React from 'react'

const Skills = () => {
  return (
    <div>
      
      <section id="skills" className="edu">
            <h1 id='myskills'>My Skills</h1>
            <div class="skillcon">
                <div className="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="c.jpg" className="skill-icon"/>
                        </div>
                        <h3>C Language</h3>
                    </div>
                    
                </div>
                <div className="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="python.png" className="skill-icon"/>
                        </div>
                        <h3>Python programming</h3>
                    </div>
                   
                </div>
                <div className="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="java.png" className="skill-icon"/>
                        </div>
                        <h3>Java programming</h3>
                    </div>
                    
                </div>
                
                <div className="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="html&css.png" className="skill-icon"/>
                        </div>
                        <h3>HTML & CSS</h3>
                    </div>
                    
                </div>
                <div className="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="javascript.png" className="skill-icon"/>
                        </div>
                        <h3>JavaScript Language</h3>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Skills;