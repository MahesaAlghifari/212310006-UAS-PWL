import React from 'react';
import { useParams } from 'react-router-dom';
import foodItems from '../../../data/FoodItems';

export default function DetailMenu() {
  const { name } = useParams();
  const product = foodItems.find(item => item.name === name);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white">
      <div className="pt-6 mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
        <div className="mt-4">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-64 w-full object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="mt-4 text-gray-700">{product.description}</p>
        <p className="mt-2 text-gray-900 font-bold">{product.price}</p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/menu"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Menu
              </a>
            </div>
    </div>
  );
}
