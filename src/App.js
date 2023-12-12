import React from 'react'
import Header from './components/header/Header'
import TopContainer from './components/topContainer/TopContainer'
import SkillContainer from './components/skillContainer/SkillContainer'
import ProjectContainer from './components/projectContainer/ProjectContainer'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
        <Header/>
        <TopContainer/>
        <SkillContainer/>
        <ProjectContainer/>
        <Contact/>
    </div>
  )
}

export default App