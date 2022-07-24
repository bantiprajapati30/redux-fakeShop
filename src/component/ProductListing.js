/** @format */

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProduct } from "../redux/actions/productAction";
import axios from "axios";

const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setProduct(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
