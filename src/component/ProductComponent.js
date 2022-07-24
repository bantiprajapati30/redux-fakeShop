/** @format */

import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.product);

  const rederListing = products.map((product) => {
    const { title, image, category, price, id } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta ">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{rederListing}</>;
};

export default ProductComponent;
