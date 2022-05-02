import React from 'react'
// import { Button } from '../../Button'
import people from '../../images/people.png'
import ai from '../../images/connectors.jpg'
import './technician.css'

const Technician = () => {
  return (
    <div className="network__header section__padding">
      <div className="network__header-content">
        <h1>Technology at your finger tips</h1>
        <p>In Avitech Solutions Limited, The whole point is not just to provide sufficient network
          and sell our services and products but to build an army of people who are all representing that
          same product or service to share with others.
        </p>
        <h3>Your network solution is here 😊</h3>
        <div className="network__header-content__input">
          <input type="email" placeholder="Your Email Address"/> 
            <button type="button">Get Started</button>
        </div>
        <div className="network__header-content__people">
          <img src={people} alt="people"/>
          <p>We have more than 1600 happy clients using our technology</p>
        </div>
      </div>
      <div className="network__header-image">
        <img src={ai} alt="Networking"/>
      </div>
    </div>
  )
}

export default Technician
