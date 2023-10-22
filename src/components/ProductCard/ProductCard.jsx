// import React from 'react';

const ProductCard = ({ product }) => {
    const {productName, productImage, category, regularPrice, offerPrice, rating} = product;
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img className="h-auto w-auto" src={productImage} alt="product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>{rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-primary text-white text-semibold">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;