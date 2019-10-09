# Local Development API Server

## Architecture
Local server
- Node.js
- Express.js

## Getting Started

### Development local API Server
_Location of server = /server_
Server depends on [node.js LTS Version: v10.16.0 ](https://nodejs.org/en/download/)
Please make sure you have these installed before proceeding forward.

Great, you are ready to proceed forward; awesome!

Let's start with running commands in your command line interface (CLI)

###### Install project dependancies
```Install project dependancies
# npm install
```
###### Start the server
```Start server
# node server
```

## Endpoints

### GET Endpoints

#### Get all recipes
```
http://localhost:3000/api/recipes/
```

#### Get favorite restaurants
```
http://localhost:1337/restaurants/?is_favorite=true
```

#### Get a recipe by id
```
http://localhost:3000/api/recipes/<id>
```

### POST Endpoints

#### Create a new recipe
```
http://localhost:3000/api/recipes/
```

###### Parameters
```
{
    "title": <recipe_title>,
    "ingredients": <ingredients>,
    "instructions": <instructions>,
    "time to prepare": <preparation_time>,
    "difficulty": <difficulty_number>
}
```

### PUT Endpoints

#### Update a recipe
```
http://localhost:3000/api/recipes/<id>
```

###### Parameters
```
{
    "title": <recipe_title>,
    "ingredients": <ingredients>,
    "instructions": <instructions>,
    "time to prepare": <preparation_time>,
    "difficulty": <difficulty_number>
}
```

### DELETE Endpoints

#### Delete a recipe
```
http://localhost:3000/api/recipes/<id>
```