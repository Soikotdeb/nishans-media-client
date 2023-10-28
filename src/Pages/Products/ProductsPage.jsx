import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard/CategoryCard';
import SelectedCategory from './SelectedCategory/SelectedCategory';

const ProductsPage = () => {
  const data = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (!data) {
    return <div>Loading...</div>;
  }

  const categories = Array.from(new Set(data.map(product => product.category)));

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="products-page">
      {/* Category cards */}
      <div className='grid  grid-cols-1 md:grid-cols-2 place-items-center w-4/5 mx-auto py-10' >
        {categories.map(category => (
          <CategoryCard key={category} category={category} onClick={() => handleCategoryClick(category)} />
        ))}
      </div>

      {/* Product cards based on selected category */}
      {selectedCategory &&
        data.filter(product => product.category === selectedCategory).map(product => (
          <SelectedCategory key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductsPage;
