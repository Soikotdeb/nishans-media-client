// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductSinglePage = () => {

    const { id } = useParams();

    const [singleProducts, setSingleProducts] = useState();

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setSingleProducts(data.find(item => item.id == id)))
    }, [id])

    console.log(singleProducts);

    return (
        <div>
           {
            singleProducts && (
                <img src={singleProducts.productImage} alt="" />
            )
           }
        </div>
    );
};

export default ProductSinglePage;