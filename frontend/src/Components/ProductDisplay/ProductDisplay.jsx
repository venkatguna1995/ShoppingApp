import React, { useContext } from "react";
import "./ProductDisplay.css";
import { CiStar } from "react-icons/ci";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContex";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="productDisplay">
      <div className="productDisplayLeft">
        <div className="productDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-img">
          <img className="productDisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplayRight">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
          <FaStar size={20} color="green" />
          <FaStar size={20} color="green" />
          <FaStar size={20} color="green" />
          <FaStarHalfAlt size={20} color="green" />
          <CiStar size={20} color="green" />
          <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productDisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productDisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          esse perspiciatis harum illo nostrum hic possimus unde
        </div>
        <div className="productDisplay-right-sizes">
          <h1>Select Size</h1>
          <div className="productDisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productDisplay-right-Category">
          <span>Category :</span>Women, T-Shirt, Crop Top
        </p>
        <p className="productDisplay-right-Category">
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
