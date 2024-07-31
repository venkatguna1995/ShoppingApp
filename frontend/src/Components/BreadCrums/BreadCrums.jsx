import React from 'react'
import './BreadCrums.css';

const BreadCrums = (props) => {
    const {product} = props
  return (
    <div className="breadcrum">
      <h1>{product.category}</h1>
    </div>
  )
}

export default BreadCrums