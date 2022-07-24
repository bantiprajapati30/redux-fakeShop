/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  selectedProducts,
  RemovedSelectedProducts,
} from "../redux/actions/productAction";
const ProductDetails = () => {
  const { productId } = useParams();
  const ProductDetail = useSelector((state) => state.selectedProduct);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.selectedProduct);
  console.log("product: ", product);
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err, "error");
      });
    // console.log("response: ", response);
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(RemovedSelectedProducts());
    };
  }, [productId]);

  console.log(ProductDetail.title, "title");
  const { image, title, id, price, category, description } = ProductDetail;

  return (
    <div className="ui grid container">
      {Object.keys(ProductDetail).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">ADD</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt="" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label"> ${price}</a>
                </h2>
                <h3 className="ui brown block header"> {category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
