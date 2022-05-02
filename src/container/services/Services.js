import React from 'react'
import HeroSection from '../../components/Herosection/HeroSection'
import {homeObjOne,homeObjThree,homeObjTwo,homeObjFour,homeObjFive} from '../../pages/ServicesPage/Data'

const Services = () => {
  return (
    <div>
      <HeroSection {...homeObjOne}/>
      <HeroSection {...homeObjTwo}/>
      <HeroSection {...homeObjThree}/>
      <HeroSection {...homeObjFour}/>
      <HeroSection {...homeObjFive}/>
    </div>
  )
}

export default Services
