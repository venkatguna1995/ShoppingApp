import React, { useEffect, useState } from "react";
import "./NewCollection.css";
// import new_Collections from '../Assets/New_Collections'
import Item from "../Items/Item";

const NewCollectons = () => {
  const [new_Collections, setNew_Collections] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((res) => res.json())
      .then((data) => setNew_Collections(data));
  },[]);

  return (
    <div className="collection">
      <h1>New Collections</h1>
      <hr />
      <div className="new-collections">
        {new_Collections.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default NewCollectons;
