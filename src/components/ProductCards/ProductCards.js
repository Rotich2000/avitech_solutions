import React,{useEffect} from 'react'
import './productCard.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
// import photo1 from '../../images/photo4.jpg'

const ProductCards = ({img,title,description,price}) => {

  useEffect(()=> {
    Aos.init({duration: 1000})
  },[])

  return (
    <div data-aos="fade-right" className="card">
      <img src={img} alt="cards" className="card__image"/>
      <div className="card__body">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
          <h3 className="card__price">{price}</h3>
          <button className="card__btn">BUY</button>
      </div> 
    </div>
  )
}

export default ProductCards
