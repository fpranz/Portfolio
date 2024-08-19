import React from 'react';
import './Contact.css';
import email from '../../assets/icons/email.png';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';

const Contact = () => {

  // This Handles the Form Submission
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Create a Form Data object from the form submission event
    const formData = new FormData(event.target);

    // Append an access key to the Form Data
    formData.append("access_key", "a5f76135-cb9d-47dd-967b-cbb1e22787de");

    // Convert the FormData to JSON object
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Send the Form Data to the Server
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    // Show an alert if the submission was successful
    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact_me'>
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <a href="mailto:franz.plariba@gmail.com">
                <img 
                  src={email} 
                  alt="Email" 
                  className='email' 
                />
              </a>
            </div>
            <div className="contact-detail">
              <a href="https://www.linkedin.com/in/franz-lariba-711234269/?originalSubdomain=ph" target="_blank" rel="noopener noreferrer">
                <img 
                  src={linkedin} 
                  alt="LinkedIn" 
                  className='linkedin' 
                />
              </a>
            </div>
            <div className="contact-detail">
              <a href="https://github.com/fpranz" target="_blank" rel="noopener noreferrer">
                <img 
                  src={github} 
                  alt="GitHub" 
                  className='github'
                />
              </a>
            </div>
          </div>
        </div>

        {/* Contact form for users to fill out */}
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name:</label>
          <input type="text" placeholder='Enter your Name' name='name' required />
          <label>Your Email:</label>
          <input type="email" placeholder='Enter your Email' name='email' required />
          <label>Write your message here:</label>
          <textarea name="message" rows='8' placeholder='Enter your Message' required></textarea>
          <button type='submit' className='button-submit'>Work with me!!!</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
