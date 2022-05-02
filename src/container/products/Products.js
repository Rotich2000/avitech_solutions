import React from 'react'
import Pricing from '../../components/pricing/Pricing'
import {IconContext} from 'react-icons/lib'
import ProductCards from '../../components/ProductCards/ProductCards'
import cable from '../../images/photo4.jpg'
import fiber from '../../images/photo3.jpg'

const Products = () => {
  return (
    <div>
      <Pricing/>
      <div className="wrapper">
      <ProductCards
      img="https://images.unsplash.com/photo-1615146198235-769c1c3d3ae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
      title="Hub"
      description="Intelligent hub"
      price="16,000.00"
      />
      <ProductCards
      img="https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      title="Hub"
      description="Intelligent hub"
      price="16,000.00"
      />
      <ProductCards
      img="https://images.unsplash.com/photo-1617882597767-ede7f0dd2db3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      title="Hub"
      description="Intelligent hub"
      price="16,000.00"
      />
      <ProductCards
      img={fiber}
      title="Hub"
      description="Intelligent hub"
      price="16,000.00"
      />
      <ProductCards
      img={cable}
      title="Hub"
      description="Intelligent hub"
      price="16,000.00"
      />
      <ProductCards
      img="https://images.unsplash.com/photo-1566060475410-1159300f046f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      title="Hub"
      description="Intelligent hub"
      price="16,000.00"
      />
      <ProductCards
      img="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      title="Hub"
      description="Intelligent hub"
      price="16,000.00"
      />
      <ProductCards
      img="https://images.unsplash.com/photo-1549109926-9620d1b9bfa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      title="Hub"
      description="Intelligent hub"
      price="16,000.00"
      />
      </div>
    </div>
  )
}

export default Products
