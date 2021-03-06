express = require('express');
path = require("path");

var PORT = process.env.PORT || 3307;

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exhb = require("express-handlebars");

app.engine("handlebars", exhb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.set('views', path.join(__dirname, 'views'));

// _________________ROUTES______________________
// Import routes and give the server access to them.
var routes = require("./controllers/game-controller.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });