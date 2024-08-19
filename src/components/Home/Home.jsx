import React from 'react';
import './Home.css'; 
import email from '../../assets/icons/email.png'; 
import linkedin from '../../assets/icons/linkedin.png'; 
import github from '../../assets/icons/github.png'; 

const Home = () => {
  return (
    <div id='home' className='home'> 
      <h1>Good Day! <span className='highlight-span'>I'm Franz Lariba</span></h1> 
      <h4 className='text'>An Aspiring Software Developer</h4>
      <div className="home-connect"> {/* Container for social media and contact links */}
        <div className='link_redirect'> {/* Wrapper for the list of contact links */}
          <ul> 
            <li>
              <a href="mailto:franz.plariba@gmail.com"> {/* Link to open email client */}
                <img
                  src={email}
                  alt="Email"
                  className='email' 
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/franz-lariba-711234269/?originalSubdomain=ph" target="_blank" rel="noopener noreferrer"> {/* Link to LinkedIn profile */}
                <img
                  src={linkedin} 
                  alt="LinkedIn" 
                  className='linkedin' 
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/fpranz" target="_blank" rel="noopener noreferrer"> {/* Link to GitHub profile */}
                <img
                  src={github}
                  alt="GitHub"
                  className='github' 
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home; // Export the Home component to be used in other parts of the application
