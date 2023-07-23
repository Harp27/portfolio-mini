
const projectsData = [
    {
      name: 'Tipsy Traveler',
      githubLink: 'https://github.com/Harp27/TipsyTraveler',
      deployedLink: 'https://tipsytraveler.onrender.com/',
      screenshot: "https://i.imgur.com/NjTHp2Q.png"
    },
    {
      name: 'Weathernaut',
      githubLink: 'https://github.com/Harp27/Weathernaut',
      deployedLink: 'https://weathernaut-zp45.onrender.com/',
      screenshot: 'https://i.imgur.com/DwEK9xP.jpg'
    },
  ];

const Project  = (props) => {

  
    return (
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Site</a>
              </div>
              <img src={project.screenshot} alt={project.name} className="project-screenshot" />
            </div>
          ))}
        </div>
      );
    }


export default Project

