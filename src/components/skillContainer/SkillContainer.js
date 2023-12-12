import React from 'react'
import "./SkillContainer.css"
import { Element } from 'react-scroll'
import { LinearProgress } from '@material-ui/core'

const SkillContainer = () => {
  return (
    <Element name='skills' className='skillContainer'>
        <div className='skillContainer_image'>
            <img src='/assets/skillImage.jpg' alt='SkillImage'/>
        </div>
        <div className='skillContainer_text'>
            <h2>SKILL SET</h2>
            <div className='skillContainer_skillset'>
                <h5>Python</h5>
                <div className='skillContainer_slider skillContainer_slider2'>
                    <LinearProgress variant='determinate' value={65}/>
                </div>
            </div>
            <div className='skillContainer_skillset'>
                <h5>Java</h5>
                <div className='skillContainer_slider skillContainer_slider3'>
                    <LinearProgress variant='determinate' value={80}/>
                </div>
            </div>
            <div className='skillContainer_skillset'>
                <h5>Spring Boot</h5>
                <div className='skillContainer_slider skillContainer_slider3'>
                    <LinearProgress variant='determinate' value={70}/>
                </div>
            </div>
            <div className='skillContainer_skillset'>
                <h5>Django</h5>
                <div className='skillContainer_slider skillContainer_slider2'>
                    <LinearProgress variant='determinate' value={50}/>
                </div>
            </div>
            <div className='skillContainer_skillset'>
                <h5>Kivy MD</h5>
                <div className='skillContainer_slider skillContainer_slider1'>
                    <LinearProgress variant='determinate' value={30}/>
                </div>
            </div>
            <div className='skillContainer_skillset'>
                <h5>React</h5>
                <div className='skillContainer_slider skillContainer_slider2'>
                    <LinearProgress variant='determinate' value={60}/>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default SkillContainer
