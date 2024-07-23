// Import foodItems dan usersData
import foodItems from '../data/FoodItems';
import usersData from '../data/Users';

// Fungsi recommendationSimilarity
export const recommendationSimilarity = (userId) => {
    const user = usersData.find((u) => u.id === userId);
    if (user) {
      const similarities = usersData
        .filter((u) => u.id !== userId)
        .map((otherUser) => {
          const commonRatings = Object.keys(user.ratings)
            .filter((foodId) => otherUser.ratings[foodId] !== undefined)
            .map((foodId) => ({
              foodId: parseInt(foodId),
              rating: otherUser.ratings[foodId],
            }));
  
          const similarity = commonRatings.reduce((acc, cur) => {
            return acc + Math.abs(user.ratings[cur.foodId] - cur.rating);
          }, 0);
  
          return {
            user: otherUser,
            similarity: 1 / (1 + similarity),
          };
        });
  
      similarities.sort((a, b) => b.similarity - a.similarity);
  
      const bestMatch = similarities[0].user;
      const recommendations = Object.keys(bestMatch.ratings)
        .filter((foodId) => user.ratings[foodId] === 0)
        .map((foodId) => ({
          food: foodItems.find((f) => f.id === parseInt(foodId)),
          rating: bestMatch.ratings[foodId],
        }));
  
      return { similarities, recommendations };
    }
  };
