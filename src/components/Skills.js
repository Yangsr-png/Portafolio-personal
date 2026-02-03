import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const logos = {
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  mongo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  vercel: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png", 
  cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  csharp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
};

export const Skills = () => {
  
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const mySkills = [
    // --- Frontend ---
    { name: "React JS", category: "Frontend", image: logos.react },
    { name: "JavaScript", category: "Frontend", image: logos.javascript },
    { name: "HTML & CSS", category: "Frontend", image: logos.html },
    
    // --- Backend ---
    { name: "Node.js", category: "Backend", image: logos.node },
    { name: "Java", category: "Backend", image: logos.java },
    { name: "Python", category: "Backend", image: logos.python },
    { name: "C#", category: "Backend", image: logos.csharp },
    { name: "C++", category: "Backend", image: logos.cpp },

    { name: "SQL / Mongo", category: "Database", image: logos.mongo },
    
    { name: "Git & Github", category: "Tools", image: logos.git },
    { name: "Docker", category: "DevOps", image: logos.docker },
    { name: "Vercel", category: "DevOps", image: logos.vercel },
  ];

  const getBadgeStyle = (category) => {
    switch(category) {
        case 'Frontend': return { backgroundColor: '#61DAFB20', color: '#61DAFB' };
        case 'Backend': return { backgroundColor: '#68A06320', color: '#68A063' };
        case 'Database': return { backgroundColor: '#F2911120', color: '#F29111' };
        case 'DevOps': return { backgroundColor: '#2496ED20', color: '#2496ED' };
        case 'Tools': return { backgroundColor: '#F0503220', color: '#F05032' };
        default: return { backgroundColor: '#ffffff20', color: '#fff' };
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Tech Stack</h2>
                        <p>Desliza para ver todas las tecnologías.</p>
                        
                        <Carousel 
                          responsive={responsive} 
                          infinite={true} 
                          autoPlay={true} 
                          autoPlaySpeed={2000} 
                          className="owl-carousel owl-theme skill-slider"
                        >
                            {mySkills.map((skill, index) => (
                                <div className="item-wrapper" key={index} style={{ padding: '15px' }}>
                                    
                                    <div className="tech-card">
                                        <img src={skill.image} alt={skill.name} className="tech-logo" />
                                        <h5>{skill.name}</h5>
                                        <span className="tech-badge" style={getBadgeStyle(skill.category)}>
                                            {skill.category}
                                        </span>
                                    </div>

                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}