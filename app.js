// Variables to require the necessary dependencies.
const express = require('express');
// const data = require('data.json');
const app = express();

// //Middleware
// app.set('view engine', 'pug');
// app.use('/static', express.static('public'));

// //Routes
// //An "index" route (/) to render the "Home" page with the locals set to data.projects
// app.get('/', (req, res) => {
//     res.render("Home");
// });
// //An "about" route (/about) to render the "About" page
// app.get('/about', (req, res) => {
//     res.render("About");
// });
//Dynamic "project" routes


//Listening on port 3000
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});