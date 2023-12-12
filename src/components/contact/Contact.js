import { IconButton } from '@material-ui/core'
import { Instagram, LinkedIn } from '@material-ui/icons'
import React from 'react'
import { Element } from 'react-scroll'
import './Contact.css'

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact_container'>
            <p>
                Email : <a href='mailto:kavinmano2211@gmail.com'><span>kavinmano2211@gmail.com</span></a>
            </p>
            <p>
                Github Username: <a href='https://github.com/Karunanithi2211'><span>@Karunanithi2211</span></a>
            </p>
            <div className='contact_icon'>
                <a href='https://www.linkedin.com/in/karunanithi-m-809236248/'>
                    <IconButton className='contact_button'>
                        <LinkedIn/>
                    </IconButton>
                </a>
                <a href='https://www.instagram.com/hey_ugly_human_i_/'>
                    <IconButton className='contact_button'>
                        <Instagram/>
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact
