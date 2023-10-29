import React, { useContext } from "react";
import "./Cartitem.scss";
import { ShopContext } from "../../Context/ShopContext";
// import remove_icon from "../assets/cart_cross_icon.png";

const CartItem = () => {
  const { getCartTotalAmount, all_product, cartItem, removeFromCart} = useContext(ShopContext);
  return (
    <>
      <div className="cartItem">
        <div className="cartItem-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartItem[e.id] > 0) {
            return (
              <div>
                <div className="cartItem-format cartItem-format-main">
                  <img className="Carticon-product-img" src={e.image} alt="" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cartItem-quantity">{cartItem[e.id]}</button>
                  <p>${e.new_price*cartItem[e.id]}</p>
                  <i class="fa-solid fa-xmark" onClick={() => {removeFromCart(e.id)}} ></i>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="cartItem-down">
            <div className="cartItem-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartItem-total-item">
                        <p>Subtotal</p>
                        <p>${getCartTotalAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartItem-total-item">
                        <p>shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <div className="cartItem-total-item">
                        <h3>Total</h3>
                        <h3>${getCartTotalAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartItem-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartItem-promobox">
                    <input type="text" placeholder="PromoCode" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
