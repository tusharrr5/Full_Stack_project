const express= require('express');
const app= express();
const dotenv = require('dotenv');
dotenv.config();

const { products } = require('./data');
console.log(products);
const cors = require('cors');

const PORT = process.env.PORT || 3000;


app.use(cors());


app.use(express.json());    
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/api', (req, res) => {
    res.send('API is working');
});
app.get('/api/products', (req, res) => {
    res.json(products);
});


app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});