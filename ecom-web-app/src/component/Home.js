import React from 'react'
import './style/Home.scss'
import ItemBox from './ItemBox'

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
      </div>
    </>
  )
}
