const path      = require("path");
const express   = require('express');
const app       = express();

// check for port environment port number, defaults to 4200;
var port = process.env.port || 4200;

// set view engine to EJS
app.set('view engine', 'ejs');

// setup static files for access.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));

// setup basic routing.
app.get('/', function(req, res) {
    // render ejs file.
    res.render("page/index");
});

// start the app at port.
app.listen(port);
console.log("Application started at port:", port);