import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { ProductContent } from "../component/productcontent";
import { getProducts } from "../store/productaction";
export default function Products(){

    const product = useSelector(state => state.products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
      }, []);
      console.log(Object.values(product).length)
      return(
          <>
          <div class="container">
<div class="card-columns">
{product ? (
          Object.values(product).map((product, index) => <ProductContent key={index} data={product}/>)
        ) : (
          <h2>Loading</h2>
        )}
</div>
</div>
          </>
      )








}