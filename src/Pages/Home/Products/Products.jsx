// import React from 'react';

import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProductCard from "../../../components/ProductCard/ProductCard";

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="p-20">
            <SectionTitle></SectionTitle>
            <div className="mt-12 grid grid-cols-4 gap-3">
                {
                    products.slice(0,8).map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;