import React from 'react'
import './style/ItemBox.scss'

export default function ItemBox() {
  return (
    <>
      <div className="itembox">
        <div className="imageBox">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfi78aYjPYC_Nv3CN0dqBrq1vFHt46ZbCfxXnz0REi_UAEA-C7T2TbnukapOrn0GdCw_E&usqp=CAU" alt="" />
        </div>
        <div className="titleBox">
            <p>Tshirt</p>
            <p>price</p>
        </div>
        <div className="itemBtn">
            <button>Add to cart</button>
        </div>
      </div>
    </>
  )
}
