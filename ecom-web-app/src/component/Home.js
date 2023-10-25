import React from 'react'
import './style/Home.scss'
import ProductPage from './productPage'
// import ItemBox from './ItemBox'

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        {/* <ItemBox/> */}
        <ProductPage />
      </div>
    </>
  )
}
