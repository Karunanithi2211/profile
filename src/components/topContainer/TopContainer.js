import React from 'react'
import { Element } from 'react-scroll'
import ContentTop from './contentTop/ContentTop'
import "./TopContainer.css"

const TopContainer = () => {
  return (
    <Element name='about' className='topContainer'>
        <ContentTop/>
    </Element>
  )
}

export default TopContainer
