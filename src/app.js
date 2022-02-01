const path = require('path');
const hbs = require('hbs');
const weather = require('./weather.js');
const express = require('express');

// const weatherData = require('./weather.js');
const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials');

// Setup handlebar engine and view location
app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Index page
app.get('',(request,response) => {
    response.render('index',{
        title : 'Index Page'
    });
})

// About page
app.get('/about', (request,response) => {
    response.render('about',{
        title : 'about Page'
    });
})

// Help page
app.get('/help', (request,response) => {
    response.render('help',{
        title : 'help Page'
    });
})

// Weather page
app.get('/weather',async (request,response) => {
    if(request.query.name){
        const data = await weather(request.query.name);
        // console.log("\nThis is from app.js");
        // console.log(data);
        response.send(data);
    }
    else {
        response.send('not found !');
    }
})

app.listen(3000, () => {
    console.log('Server is runing on port 3000');
})