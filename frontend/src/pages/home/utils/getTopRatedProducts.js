// utils.js
import foodItems from '../../../data/FoodItems';

export const getTopRatedProducts = (count) => {
  return [...foodItems].sort((a, b) => b.rating - a.rating).slice(0, count);
};
