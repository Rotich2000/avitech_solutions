import React from 'react'
import HeroSection from '../../components/Herosection/HeroSection'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from '../../pages/AboutusPage/Data'


const About = () => {
  return (
    <div>
      <HeroSection {...homeObjOne}/>
      <HeroSection {...homeObjTwo}/>
      <HeroSection {...homeObjThree}/>
      <HeroSection {...homeObjFour}/>
    </div>
  )
}

export default About
