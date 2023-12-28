import React from 'react'
import { Element } from 'react-scroll'
import Projects from './projects/Projects'
import "./ProjectContainer.css"

const ProjectContainer = () => {
    const projects =[
        {
            projectImage:"/assets/dayFinder.png",
            projectTitle:"Day Finder",
            projectDescription:"A Website used to find the day of any date given in between 1600-2100 in both django and springboot",
            projectVideo:"/assets/dayFinder.mp4"
        },
        {
            projectImage:"/assets/myWebsite.png",
            projectTitle:"My Website",
            projectDescription:"A website made with the base of flipkart but i made as i wanted",
            projectVideo:"/assets/myWebsite.mp4"
        },
        {
            projectImage:"/assets/quizWebsite.png",
            projectTitle:"Quiz Website",
            projectDescription:"This website is used to practise aptitude questions and can view the results of each attempt",
            projectVideo:"/assets/quizWebsite.mp4"
        },
        {
            projectImage:"/assets/carWebsite.png",
            projectTitle:"Car Website",
            projectDescription:"In this Website i can see details of cars and sort by car name, Whole thing of the project is if an admin logins the admin can add new cars from website itself but user cant",
            projectVideo:"/assets/carWebsite.mp4"
        },
        {
            projectImage:"/assets/inStagram.png",
            projectTitle:"Nivak's Instagram",
            projectDescription:"This website is clone of Instagram with features such as login, register, profile image change, upload post(video,image), follow, unfollow, like, unlike, comment, reels, explore, search user, email verification....",
            projectVideo:"/assets/inStagram.mp4"
        },
        {
            projectImage:"/assets/nivakMedia.png",
            projectTitle:"Nivak Media",
            projectDescription:"A social Media platform similar to insta had many new featues than my previous project and i deployed it for free checkit out i will add many new features in future",
            projectLink:"https://nivakmedia.netlify.app/"
        }
    ]
  return (
    <Element name='projects' className='projectContainer'>
        <h1>Projects</h1>
        <p>Here are some projects i done by my own, over the mouse to see description and click the project to see overview</p>
        <div className='projectContainer_project'>
            {
                projects.map((project, index)=>{
                    return(
                        <Projects 
                            key={index} 
                            img={project?.projectImage}
                            title={project?.projectTitle}
                            desc={project?.projectDescription}
                            video={project?.projectVideo}
                            link = {project?.projectLink}
                        />
                    )
                    
                })
            }       
        </div>
    </Element>
  )
}

export default ProjectContainer
