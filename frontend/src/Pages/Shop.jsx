import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import NewCollectons from '../Components/NewCollections/NewCollectons'
import NewsLattes from '../Components/NewsLatter/NewsLattes'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewCollectons/>
        <NewsLattes/>
    </div>
  )
}

export default Shop