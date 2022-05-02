import React,{useEffect} from 'react'
import {google,slack,atlassian,dropbox,shopify} from './imports'
import './brand.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Brand = () => {
  useEffect(()=> {
    Aos.init({duration: 1000})
  },[])
  return (
    <div data-aos="fade-right" className="network__brand section__padding">
      <div>
        <img src={google} alt="Google"/>
      </div>
      <div>
        <img src={slack} alt="Google"/>
      </div>
      <div>
        <img src={atlassian} alt="Google"/>
      </div>
      <div>
        <img src={dropbox} alt="Google"/>
      </div>
      <div>
        <img src={shopify} alt="Google"/>
      </div>
    </div>
  )
}

export default Brand
