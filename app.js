const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const bookingRoutes = require('./routes/bookingRoutes');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Kết nối MongoDB
connectDB();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', bookingRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});