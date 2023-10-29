import React from 'react'
import "./related.scss";
import data_product from '../assets/data'
import Item from '../item/Item'

const RelatedProduct = () => {
  return (
    <>
      <div className="relatedProduct">
        <h1>Related Products</h1>
        <hr />
        <div className="relatedProduct-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
      </div>
    </>
  )
}

export default RelatedProduct
