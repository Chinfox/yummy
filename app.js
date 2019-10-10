const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//  enable cross origin resource sharing (CORS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/recipes', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'recipe created successfully!'
    });
});

//  get all recipes
app.use('/api/recipes', (req, res, next) => {
    const recipeSamples = [
        {
            _id: '1',
            title: 'my title',
            ingredients: 'pepper',
            instructions: 'cook',
            time: '10',
            difficulty: '5'
        },
        {
            _id: '2',
            title: 'my second',
            ingredients: 'onion, tomato',
            instructions: 'boil, season',
            time: '23',
            difficulty: '2'
        }
    ];
    res.status(200).json(recipeSamples);
});

module.exports = app;