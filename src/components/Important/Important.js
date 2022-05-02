import React,{useEffect} from 'react'
import Features from '../features/Features'
import './important.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Important = () => {
  useEffect(()=> {
    Aos.init({duration: 1000})
  },[])
  return (
    <div data-aos="fade-right" className="network__important section__padding">
      <div className="network__important-feature">
          <Features
          title = "Why AVitech?🤷‍♀️"
          text = "Avitech does not only provide you with affordable internet packages but also provides services such as CCTV and Electric fences Installation. Imagine getting all these services from one company, It will be even cheaper with discounts. Choose Avitech today and you will never regret the rest of your life."
          />
      </div>
      <div className="network__important-heading">
          <h1>Be bold and switch to Avitech solutions, You'll Discover 
              You've been missing a lot 🤩.
          </h1>
          <p>Explore</p>
      </div>
      <div className="network__important-container">
          <Features
          title = "Authenthic"
          text = "Avitech gets you covered by ensuring their clients use strong passwords."
          />
          <Features
          title = "Privacy"
          text = "Our networks are highly secure from DDoS, Unauthorized access,Codes and SQL injections."
          />
          <Features
          title="Moneyback"
          text="Incase of incovinience about our services, we will refund back the money you used for our services."
          />
      </div>
    </div>
  )
}

export default Important
