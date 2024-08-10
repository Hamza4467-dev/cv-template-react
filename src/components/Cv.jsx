import React from 'react';

function Cv() {
  const experienceData = [
    {
      userName: "Hamza Babar",
      company: "Company name",
      time: "Nov 2024 - Present",
      jobTitle: "Front End Developer",
      description: "Hey there! I'm Hamza Babar, and I'm thrilled to welcome you to my profile.With a remarkable track record spanning over 3 years, I'm your go-to freelance web developer for translating visions into captivating online experiences.In addition to my skills, I love learning and exploring new possibilities in technology every day. Thank you!",
      profileImg: "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",
      call: "+92 3011265964",
      mail: "chhamza4467@gmail.com",
      home: "chiniot"


    }
  ];

  const skillsData = [
    "HTML / HTML5",
    "CSS / CSS3 / SASS / LESS",
    "Javascript",
    "Jquery",
    "Wordpress",
    "Photoshop"
  ];

  const hobbies = [
    "Reading tech blogs",
    "Contributing to open-source projects",
    "Playing chess",
    "Hiking",
    "Gaming"
  ];


  const socialLinks = [
    { platform: "Twitter", user: "@hamza", href: "#" },
    { platform: "Dribbble", user: "hamza4467", href: "#" },
    { platform: "behance", user: "hamza", href: "#" }
  ];


  return (
    <>

      {experienceData.map((item, index) => (
        <div className="resume-wrapper" key={index}>
          <section className="profile section-padding">
            <div className="container">
              <div className="picture-resume-wrapper">
                <div className="picture-resume">

                  <span><img src={item.profileImg} alt={item.jobTitle} /></span>
                </div>
                <div className="clearfix" />
              </div>
              <div className="name-wrapper">
                <h1>{item.userName}</h1>

              </div>
              <div className="clearfix" />
              <div className="contact-info clearfix">
                <ul className="list-titles">
                  <li>Call</li>
                  <li>Mail</li>

                  <li>Home</li>
                </ul>
                <ul className="list-content">

                  <li>{item.call}</li>
                  <li>{item.mail}</li>
                  <li>{item.home}</li>
                </ul>
              </div>
              <div className="contact-presentation">
                <p>{item.description} </p>
              </div>
              <div className="contact-social clearfix">
                <ul className="list-titles">
                  {skillsData.map((skills, i) => (
                    <li key={i}>{skills}</li>
                  ))}
                </ul>
                <ul className="list-content">
                  {socialLinks.map((soc, i) => (
                    <li key={i}>
                      <a href={soc.href}>{soc.platform} - {soc.user}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section className="experience section-padding">
            <div className="container">
              <h3 className="experience-title">Experience</h3>
              <div className="experience-wrapper">
                <div className="company-wrapper clearfix">
                  <div className="experience-title">{item.company}</div>
                  <div className="time">{item.time}</div>
                </div>
                <div className="job-wrapper clearfix">
                  <div className="experience-title">{item.jobTitle}</div>
                  <div className="company-description">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="section-wrapper clearfix">
                <h3 className="section-title">Skills</h3>
                <ul>
                  {skillsData.map((skill, i) => (
                    <li key={i} >{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="section-wrapper clearfix">
                <h3 className="section-title">Hobbies</h3>
                <ul>
                  {hobbies.map((item, i) => (
                    <li key={i}>
                      {item}
                    </li>
                  ))}

                </ul>
              </div>
            </div>
          </section>
          <div className="clearfix" />
        </div>
      ))}
    </>
  );
}

export default Cv;
