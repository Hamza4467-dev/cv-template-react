import React from 'react'

function list() {
  const cvData = [

    {
      userName: "John Doe",
      Email: "john.doe@gmail.com ",
      skills: ["js", "cs"],
      des: "Front-End Developer I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.",
      img: "",
      hobbies: ["cricket,fooetcc"]
    }
  ]



  return (
    <>
      {cvData.map((item) => (
        <div>
          <h1>{item.Email}</h1>
          <h2>{item.skills}</h2>
          <p>{item.des}</p>
          <img src="{}" alt="" />
        </div>

      ))}



    </>
  )
}

export default list