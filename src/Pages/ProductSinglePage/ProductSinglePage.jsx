// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductSinglePage = () => {

    const { id } = useParams();

    const [singleProduct, setSingleProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => console.log(data.find(item => item.id === id)))
    }, [id])

    // console.log(singleProduct);

    return (
        <div>
            tatatta
        </div>
    );
};

export default ProductSinglePage;