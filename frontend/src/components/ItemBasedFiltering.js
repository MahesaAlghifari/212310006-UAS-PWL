// Fungsi untuk menghitung kesamaan antara dua item menggunakan kesamaan cosinus
const calculateSimilarity = (item1, item2, users) => {
    let sumProduct = 0;
    let sumSquareItem1 = 0;
    let sumSquareItem2 = 0;

    users.forEach(user => {
        const rating1 = user.ratings[item1];
        const rating2 = user.ratings[item2];
        if (rating1 !== undefined && rating2 !== undefined) {
            sumProduct += rating1 * rating2;
            sumSquareItem1 += rating1 * rating1;
            sumSquareItem2 += rating2 * rating2;
        }
    });

    return sumProduct / (Math.sqrt(sumSquareItem1) * Math.sqrt(sumSquareItem2));
};

// Fungsi untuk mendapatkan rekomendasi item berbasis item
const itemBasedRecommendation = (userId, users, foods) => {
    const user = users.find(u => u.id === userId);
    if (!user) return null;

    const items = Object.keys(user.ratings);
    const itemSimilarities = {};

    items.forEach(item => {
        foods.forEach(food => {
            if (!itemSimilarities[food.id]) itemSimilarities[food.id] = [];
            if (item !== food.id.toString()) {
                const similarity = calculateSimilarity(item, food.id.toString(), users);
                itemSimilarities[food.id].push({ item, similarity });
            }
        });
    });

    // Filter and sum similarities for each item not rated by the user
    const recommendations = foods.map(food => {
        if (user.ratings[food.id] === undefined) {
            let weightedSum = 0;
            let similaritySum = 0;

            itemSimilarities[food.id].forEach(sim => {
                const userRating = user.ratings[sim.item];
                if (userRating !== undefined) {
                    weightedSum += sim.similarity * userRating;
                    similaritySum += sim.similarity;
                }
            });

            const predictedRating = similaritySum === 0 ? 0 : weightedSum / similaritySum;
            return { food, predictedRating };
        }
    }).filter(rec => rec !== undefined);

    // Sort recommendations by predicted rating
    recommendations.sort((a, b) => b.predictedRating - a.predictedRating);

    return recommendations;
};

// Contoh penggunaan
const users = [
    { id: 1, ratings: { 1: 5, 2: 3, 3: 4 } },
    { id: 2, ratings: { 1: 4, 2: 2, 3: 5 } },
    { id: 3, ratings: { 1: 3, 3: 4, 4: 5 } },
];

const foods = [
    { id: 1, name: "Pizza" },
    { id: 2, name: "Burger" },
    { id: 3, name: "Pasta" },
    { id: 4, name: "Salad" },
];

const recommendations = itemBasedRecommendation(1, users, foods);
console.log(recommendations);
