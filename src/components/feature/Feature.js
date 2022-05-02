import React,{useState,useEffect} from 'react'
import {SliderData} from './SliderData'
import { FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import './feature.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Feature = ({slides}) => {

  useEffect(()=> {
    Aos.init({duration: 1000})
  },[])

  const [current,setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0: current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1: current - 1)
  }


  if(!Array.isArray(slides) || slides.length <= 0){
    return null
  }

  return (
    <div data-aos="flip-up" className="network__feature section__padding">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
      {SliderData.map((slide,index)=>{

        return(
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (<img src={slide.image} alt="technician" className="image"/>)}
              
          </div>
        )
          
      })}
    </div>
  )
}

export default Feature
