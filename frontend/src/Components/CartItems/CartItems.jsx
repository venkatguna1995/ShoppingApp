import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContex";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const CartItems = () => {
  const { all_products_data, cartItem, addToCart, removeFromCart,getCartItemsTotal } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <div>Products</div>
        <div>Tittle</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
        <div>Remove</div>
      </div>
      <hr />
      {all_products_data.map((e) => {
        if (cartItem[e.id] > 0) {
            console.log(e)
          return (
            <div>
              <div className="cartItems-format cartItems-format-main">
                <img src={e.image} alt="" className="cartIcon-product-icon" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartItems-quantity">{cartItem[e.id]}</button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <IoIosRemoveCircleOutline
                  size={30}
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartItems-total-items">
                    <p>Subtotal</p>
                    <p>${getCartItemsTotal()}</p>
                </div>
                <hr />
                <div className="cartItems-total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartItems-total-items">
                    <h3>Total</h3>
                    <h3>${0}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItems-promoCode">
            <p>If You Have Promocade Enter Here</p>
            <div className="cartItems-promoCodeBox">
                <input type="text" placeholder=" Enter Promo Code" />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
