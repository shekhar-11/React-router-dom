import React from 'react'
import About from '../Components/About'
import Home from '../Components/Home'
import Skills from '../Components/Skills'
import Hobbies from '../Components/Hobbies'
import Projects from '../Components/Projects'
import { Route,Routes  } from 'react-router-dom'
// import { } from 'react-router-dom'
function RoutesFunc() {
 
 return (<Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/hobbies" element={<Hobbies/>}/>
      <Route path="/projects" element={<Projects/>}/>

      
 </Routes>)
}

export default RoutesFunc
