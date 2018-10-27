// Variables to require the necessary dependencies.
const express = require('express');
const data = require('./data.json');
const app = express();

// //Middleware
app.set('view engine', 'pug');
app.use('/static', express.static('public'));
app.use('/images', express.static('images'));

// //Routes
// //An "index" route (/) to render the "Home" page with the locals set to data.projects
app.get('/', (req, res) => {
    res.render('index', { data });
});
// //An "about" route (/about) to render the "About" page
app.get('/about', (req, res) => {
    res.render('about');
});
//Dynamic "project" routes
app.get('/projects/:id', (req, res) => {
    res.render('project', {
        data:data,
        id: req.params.id
    })
});

//Listening on port 3000
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});