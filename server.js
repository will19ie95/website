const path      = require("path");
const express   = require('express');
const app       = express();

const cardData  = require("./data/card_data.js")

// check for port environment port number, defaults to 4200;
var port = process.env.port || 8080;

// set view engine to EJS
app.set('view engine', 'ejs');

// setup static files for access.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// setup basic routing.
app.get('/', function(req, res) {
    // render ejs file.
    res.render("page/index", {
        cards: cardData
    });

});

app.get('/details', function (req, res) {
    // render ejs file.
    res.render("page/section-details");
});

// start the app at port.
app.listen(port);
console.log("Application started at port:", port);