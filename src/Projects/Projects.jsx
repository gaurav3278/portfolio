import React from 'react';
import './projects.css';
import study from '../assests/study.jpg';
import img1 from '../assests/img2.png'

const Projects = () => {
  const data = [
    { id: 1, img: study, title: 'StudyVerse', details: 'Study Verse is an online learning platform. We have used React with Tailwind to implement the frontend part and for the backend NodeJs and MongoDB has been used.We have also used firebase storage for storing the data.', visit: 'https://studyverse.netlify.app/' },
    { id: 2, img: img1, title: 'Gericht', details: 'This project is based on React.js. It is basically a menu of a restuarant which is designed to be user friendly and easy to use. The menu is designed to be scalable and can be used in a large restaurant. It provides all information about the restuarant with a very beautiful interface which will excite and attract the customers.It is full responsive and can be used in any device.', visit: 'https://gericht-restrau.netlify.app/' },
  ]
  return (
    <div className='project_container' id='Projects'>
      <div className='project_head'>
        <h1>Projects</h1>
      </div>
      <div className='project_wrap' style={{ position: 'relative' }}>
        {data.map((value, i) => (
          <div className='project_cards'>
            <div>
              <img src={value.img} alt="study" />
            </div>
            <div>
              <span>{value.title}</span>
              <hr style={{ width: '50px', height: '3px', background: 'rgb(208, 187, 87)', border: 'none' }} />
              <span>{value.details}</span>
            </div>
            <a href={value.visit} target='_blank'>visit</a>
          </div>
        ))}
      </div>
      <div style={{display:'flex',justifyContent:'start',alignItems:'start'}}>
        <p style={{ width: '200px', height: '5px', background: 'linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)', borderRadius: '50px', border: 'none', }} />
      </div>
    </div>
  )
}

export default Projects