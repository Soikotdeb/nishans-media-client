import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category, handleCategoryClick }) => {
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl">
                {/* <figure><img className="h-auto w-auto" src={} alt="product" /></figure> */}
                <div className="p-4 spce-y-1">
                    <h2 className="card-title font-bold uppercase">{category}</h2>

                    <p className="card-title text-lg py-2">Total Items: {category.length}</p>
                    
                    <div className="flex justify-between items-center">
                        <div className="card-actions justify-end">
                            <Link className='btn bg-primary text-white text-semibold' to={`/selected/${category}`} onClick={() => handleCategoryClick(category)}>View Category</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
