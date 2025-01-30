import React from 'react';

const skillsData = [
  { skill: 'React', level: 90 },
  { skill: 'Django', level: 85 },
  { skill: 'JavaScript', level: 95 },
  { skill: 'CSS', level: 80 },
  { skill: 'HTML', level: 90 },
];

const Skills = () => {
  return (
    <section id="skills" className="p-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">My Skills</h2>
        <p className="text-center mb-4">
          As a skilled full-stack developer, I specialize in building robust and scalable web applications using Django, React, JavaScript and other modern frameworks. 
          My expertise spans both frontend and backend development, allowing me to create seamless user experiences with optimized performance. ** My Skiils Proficients are measured as follows:**
        </p>
        
        <div className="row">
          {skillsData.map((skill, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="card p-3 shadow-sm">
                <h5>{skill.skill}</h5>
                <div className="progress" style={{ height: '10px', position: 'relative' }}>
                  <div 
                    className="progress-bar bg-primary" 
                    role="progressbar" 
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                  <span 
                    className="position-absolute" 
                    style={{ right: '10px', top: '-5px', fontSize: '14px', fontWeight: 'bold' }}>
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
