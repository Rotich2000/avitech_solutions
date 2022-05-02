import React from 'react'
import { Brand, Feature, Technician } from '../../components'
import Important from '../../components/Important/Important'
import {SliderData} from '../../components/feature/SliderData'

const Home = () => {
  return (
    <>
     <div className="gradient__bg">
     <Technician/>
     </div>
     <Brand/>
     <Feature slides={SliderData}/>
     <Important/>
    </>
  )
}

export default Home