import React from 'react'; 
import './Projects.css'; 
import projects_data from '../../assets/projects/projects';

const Projects = () => {
  return (
    <div id='projects' className='projects'> {/* Container for the Projects section */}
        <div className="project-title"> 
          <h1>Projects</h1> 
        </div>
        <div className="theprojects"> {/* Container for displaying project items */}
          {/* Iterate over the projects_data array */} 
          {projects_data.map((proj, index) => { 
            return (
              <a key={index} href={proj.link} target="_blank" rel="noopener noreferrer"> {/* Link to project details */}
                <img key={index} src={proj.p_img} alt='' /> {/* Display project image */}
              </a>
            );
          })}
        </div>
    </div>
  );
}

export default Projects;