import React, { useEffect, useState } from "react";
// import classes from "./ProductDetail.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
// import Loader from "../../Components/";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setproduct] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {product && product.id ? (
            <ProductCard product={product} flex={true} 
            renderDesc={true}/>
          ) : (
            <p>Loading product...</p>
          )}
        </div>
      )} 
    </LayOut>
  ); 
};

export default ProductDetail;
