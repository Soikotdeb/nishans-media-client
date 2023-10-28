// import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { id, productName, productImage, regularPrice, offerPrice, rating } = product;
    return (

        <div className="card w-72 bg-base-100 shadow-xl">
            <figure>
                <Link to={`/product/${id}`}>
                    <img className="h-auto w-auto" src={productImage} alt="product" />
                </Link>
            </figure>
            <div className="p-4 space-y-1">
                <h2 className="card-title font-bold">{productName}</h2>
                {/* <p>{category}</p> */}

                <ReactStars
                    count={5}
                    size={24}
                    activeColor="#e50000"
                    edit={false}
                    value={rating}
                />
                <div className="flex justify-between items-center">
                    <div>
                        <p className="line-through -mb-2">
                            <span className="text-2xl">&#2547;</span>{regularPrice}
                        </p>
                        <p className="font-semibold">
                            <span className="text-2xl">&#2547;</span>{offerPrice}
                        </p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn bg-primary text-white text-semibold">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;