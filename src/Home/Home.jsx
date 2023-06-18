import React from 'react';
import './home.css';
import gaurav from '../assests/gaurav.jpg'

const Home = () => {
  return (
    <div className='home_container' id='Home'>
      <div className='home_details'>
        <span>Hey Folks,<br />
          Welcome to my portfolio.</span>
        <span>My name is Gaurav Rai, and I'm a B.Tech student in computer science and engineering from India. I am a web developer that specialises in front-end development and is also studying backend development.</span>
        <button onClick={() => window.location = "https://leetcode.com/gaurav_rai32/"}>Coding Profile</button>
        <hr style={{ width: '98%', height: '5px',background:'linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)',borderRadius:'50px',border:'none'}} />
      </div>
      <div className='home-right'>
        <div className='home_img'>
          <img src={gaurav} alt="dp" />
        </div>
      </div>
    </div>
  )
}

export default Home