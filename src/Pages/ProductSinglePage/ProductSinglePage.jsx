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

    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div>
            {
                singleProducts && (
                    <div className="m-16 shadow-2xl flex gap-8 p-12">
                        <div className="w-5/12">
                            <img src={singleProducts.productImage} className="w-full" alt="" />
                        </div>
                        <div className="space-y-3 w-7/12">
                            <h1 className="text-4xl font-bold">{singleProducts.productName}</h1>
                            <p className="font-semibold text-gray-600 text-primary">{singleProducts.category}</p>
                            <div className="flex gap-5 font-semibold">
                                <h4 className="text-2xl line-through text-gray-500">&#2547;{singleProducts.regularPrice}</h4>
                                <h4 className="text-2xl">&#2547;{singleProducts.offerPrice}</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eum quaerat molestias dolore rerum libero est! Molestias voluptate pariatur, alias sunt, sequi velit, modi repellendus quis possimus molestiae libero quod culpa quia aut reprehenderit officiis quasi suscipit quidem enim accusantium!</p>

                            {/* quantity */}
                            <div className="flex items-center space-x-4 pt-5 pb-2">
                                <button
                                    className="bg-gray-200 px-2 py-1 text-2xl font-semibold hover:bg-gray-300"
                                    onClick={decreaseQuantity}
                                >
                                    -
                                </button>
                                <span className="text-xl">{quantity}</span>
                                <button
                                    className="bg-gray-200 px-2 py-1 text-2xl font-semibold hover:bg-gray-300"
                                    onClick={increaseQuantity}
                                >
                                    +
                                </button>
                            </div>
                            <button className="btn bg-primary text-white">Add To Cart</button>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default ProductSinglePage;