import React, { useState } from 'react'
import "./Projects.css"

const Projects = ({img, title, desc, video}) => {
  const [show, setShow] = useState(false)
  const [play,setPlay] = useState(false)

  return (
    <div 
        className='project' 
        onMouseOver={() => setShow(true)} 
        onMouseLeave={() => setShow(false)}
    >
      {
        show ? (
            <div>
                <div className='project_content' onClick={()=>setPlay(true)}>
                    <h4><u><b>{title}</b></u></h4>
                    <p>{desc}</p>
                </div>
                {play &&
                    <div className='project_video'  onClick={()=>{setPlay(false); setShow(false)}} onMouseLeave={()=>{setPlay(false); setShow(false)}}>
                        <video src={video} loop muted autoPlay controls/>
                    </div>
                }
            </div>
        ):(
           <img src={img} alt='Image'/> 
        )
      }
    </div>
  )
}

export default Projects
