// Card.js
import React, { useEffect, useState } from 'react';
import foodItems from '../../../data/FoodItems';
import users from '../../../data/Users';

const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          <h3 className="text-sm text-slate-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.flavorName}
            </a>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
};

const Card = ({ userId }) => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    if (userId) {
      // Ambil pengguna berdasarkan userId
      const currentUser = users.find(user => user.id === userId);

      if (!currentUser) {
        console.error(`User with id ${userId} not found`);
        return; // Keluar dari useEffect jika userId tidak ditemukan
      }

      // Contoh penggunaan algoritma item-based filtering
      const productSimilarity = {};

      foodItems.forEach((item1) => {
        productSimilarity[item1.id] = {};

        foodItems.forEach((item2) => {
          if (item1.id !== item2.id) {
            if (item1.flavorID === item2.flavorID) {
              productSimilarity[item1.id][item2.id] = 1; // Similiaritas maksimum jika sama flavor
            } else {
              productSimilarity[item1.id][item2.id] = 0; // Similiaritas nol jika tidak sama flavor
            }
          }
        });
      });

      // Ambil produk yang disarankan berdasarkan nilai kesamaan
      const recommendedIds = Object.keys(productSimilarity[currentUser.id])
        .sort((a, b) => productSimilarity[currentUser.id][b] - productSimilarity[currentUser.id][a])
        .slice(0, 4); // Ambil 4 produk dengan kesamaan tertinggi

      const recommendedProducts = foodItems.filter(item => recommendedIds.includes(item.id.toString()));

      setRecommendedProducts(recommendedProducts);
    } else {
      // Jika tidak ada userId, tampilkan 4 produk dengan rating tertinggi
      const topRatedProducts = foodItems.sort((a, b) => b.rating - a.rating).slice(0, 4);
      setRecommendedProducts(topRatedProducts);
    }
  }, [userId]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recommendation for you!</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
