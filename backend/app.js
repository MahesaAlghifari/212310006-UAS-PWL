const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const uri = process.env.MONGODB_URI || 'your-mongodb-uri-here';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Routes
const userRoutes = require('./routes/user.routes');
const reservationRoutes = require('./routes/reservation.routes');
const menuRoutes = require('./routes/menu.routes');
const categoryRoutes = require('./routes/category.routes');
const facilityRoutes = require('./routes/facility.routes');
const profileRoutes = require('./routes/profile.routes');

app.use('/users', userRoutes);
app.use('/reservations', reservationRoutes);
app.use('/menus', menuRoutes);
app.use('/categories', categoryRoutes);
app.use('/facilities', facilityRoutes);
app.use('/profiles', profileRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
