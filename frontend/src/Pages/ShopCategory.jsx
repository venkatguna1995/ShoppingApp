import React, { useContext } from "react";
import "../Pages/CSS/ShopCategory.css";
import Item from "../Components/Items/Item";
import { ShopContext } from "../Context/ShopContex";

const ShopCategory = (props) => {
  const all_products = useContext(ShopContext);
  return (
    <div className="shop_category">
      <img src={props.banner} alt="" />
      <div className="shopcategory_indexsort">
        <p>
          <span>Showing 1-12</span> out of 30 products
        </p>
      </div>
      <div className="shopcategory-products">
        {
        all_products.all_products_data.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
