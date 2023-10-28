import React from 'react';
import ReactStars from "react-rating-stars-component";
import { useLoaderData, useParams } from 'react-router-dom';

const SelectedCategory = () => {
    const products = useLoaderData();
    const { category } = useParams();

    if (!products) {
        // Handle loading state if products data is not yet available
        return <div>Loading...</div>;
    }

    const filteredProducts = products.filter(product => product.category === category);

    return (
        <>
            <h2 className='text-4xl uppercase text-center py-10'>{category}</h2>
            <div className="selected-category grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-4/5 mx-auto">
                {filteredProducts.map(product => (
                    <div className=''>
                        <div className="card w-72 bg-base-100 shadow-xl">
                            <figure><img className="h-auto w-auto" src={product.productImage} alt="product" /></figure>
                            <div className="p-4 spce-y-1">
                                <h2 className="card-title font-bold">{product.productName}</h2>
                                {/* <p>{category}</p> */}

                                <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor="#e50000"
                                    edit={false}
                                    value={product.rating}
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="line-through -mb-2">
                                            <span className="text-2xl">&#2547;</span>{product.regularPrice}
                                        </p>
                                        <p className="font-semibold">
                                            <span className="text-2xl">&#2547;</span>{product.offerPrice}
                                        </p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button className="btn bg-primary text-white text-semibold">Add To Card</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SelectedCategory;
