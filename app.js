const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Recipe = require('./models/recipes');

const app = express();

mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb+srv://owiwi:b4CG56I70A68QaoP@cluster0-7cerh.mongodb.net/uba?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => {
        console.log('Database connection successful');
    })
    .catch((error) => {
        console.log(`${error}: Failed to connect to Database`);
    });

app.use(bodyParser.json());

//  enable cross origin resource sharing (CORS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//  POST a recipe
app.post('/api/recipes', (req, res, next) => {
    // console.log(req.body);
    // res.status(201).json({
    //     message: 'recipe created successfully!'
    // });

    const recipe = new Recipe({
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        time: req.body.time,
        difficulty: req.body.difficulty
    });

		recipe.save()
			.then(() => {
				res.status(201).json({
					message: 'Recipe saved successfully'
				});
			})
			.catch((error) => {
				res.status(400).json({
					error: error
				});
			});
});

//  GET all recipes
app.use('/api/recipes', (req, res, next) => {
    // const recipeSamples = [
    //     {
    //         _id: '1',
    //         title: 'my title',
    //         ingredients: 'pepper',
    //         instructions: 'cook',
    //         time: '10',
    //         difficulty: '5'
    //     },
    //     {
    //         _id: '2',
    //         title: 'my second',
    //         ingredients: 'onion, tomato',
    //         instructions: 'boil, season',
    //         time: '23',
    //         difficulty: '2'
    //     }
    // ];
		// res.status(200).json(recipeSamples);
		Recipe.find()
			.then((recipes) => {
				res.status(200).json(recipes);
			})
			.catch((error) => {
				res.status(400).json({
					error: error
				});
			});
});

module.exports = app;