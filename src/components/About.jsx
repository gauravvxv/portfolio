import React from 'react'
import logo from "../Images/formal.png (2).png"
import "../styles/about.css"
import git from "../Images/github.png.png"
import linkedin from "../Images/linkedin.png.png"
import insta from "../Images/insta.png.png"
import mail from "../Images/mail.png (2).png"
export const About = () => {
  return (
    <div id="about" className="about-section">
      {/* top one */}
      <div className='about-container'>
        <h1 className='aboutMe'>About me</h1>
      </div>
      {/* end */}

      <div className='container'>
        <div className='child'>
        <div id="user-detail-intro">
          A dedicated web developer with a strong foundation in coding and a passion for creating innovative and user-friendly websites. Committed to staying updated with emerging web technologies and continuously improving skills.
          <br />
          <a href="https://github.com/gauravvxv" >
          </a>
          <img src={git} id="contact-github1" />
          <a href="https://www.linkedin.com/in/gaurav-sharma-827830247/">
            <img src={linkedin} id="contact-linkedin1" />
          </a>
          <a href="mailto:gauravxv0410@gmail.com">
            <img src={mail} id="contact-email1" />
          </a>
          <a href="https://www.instagram.com/gauravvxv/">
            <img src={insta} id="contact-insta1" />
          </a>
        </div>

        <div className='formal-image'>
          <img src={logo} className='home-img' />
        </div>
        </div>
      </div>
    </div>
  )
}


// <div>
// <div className='about-container'>
//   <h1 className='aboutMe'>About me</h1>
// </div>
// <div className='container'>
// <div className='intro'>
//
// <div>
//
// </div>
// </div>
// <div className='formal-image'>
// <img src={logo} className="home-img"/>
// </div>
// </div>
// </div>