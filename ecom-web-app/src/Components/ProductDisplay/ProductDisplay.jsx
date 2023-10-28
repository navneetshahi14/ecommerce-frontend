import React from "react";
import './productDisplay.scss'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props
  return (
    <>
      <div className="productdisplay">
         <div className="product-Left">
            <div className="productDisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productDisplay-img">
                <img className="MainImg" src={product.image} alt="" />
            </div>
         </div>
         <div className="product-Right">
            <h1>{product.name}</h1>
            <div className="product-Right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="product-Right-price">
                <div className="product-right-price-old">${product.old_price}</div>
                <div className="product-right-price-new">${product.new_price}</div>
            </div>
            <div className="product-right-descript">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, doloremque facere! Voluptates exercitationem explicabo ipsum sapiente eos recusandae dolores minima! Labore, possimus architecto.
            </div>
            
         </div>
      </div>
    </>
  );
};

export default ProductDisplay;
