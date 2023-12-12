import React from 'react'
import { Link } from 'react-scroll'
import "./ContentTop.css"

const ContentTop = () => {
  return (
    <div className='contentTop'>
      <div className='contentTop_container'>
        <h1>Karunanithi M</h1>
        <p>Fresher, Full Stack Developer, Self Learned</p>
        <a href='/assets/myResume.pdf' download="Karunanithi_M.pdf">
            <button className='contentTop_download'>Download CV</button>
        </a>
        <div className='contentTop_work'>
          <Link to='projects' smooth={true} duration={600}>
            <button>My Work</button>
          </Link>
        </div>
        
        
      </div>
    </div>
  )
}

export default ContentTop
