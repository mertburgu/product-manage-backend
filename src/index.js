// src/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect('mongodb://localhost/product_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.error('Error connecting to MongoDB:', error);
});

app.use(cors());
app.use(express.json()); // JSON verileri için
app.use(express.urlencoded({ extended: false }));

app.use('/api', authRoutes);
app.use('/api', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});