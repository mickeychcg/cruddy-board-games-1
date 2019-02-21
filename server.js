var express = require('express');
var methodOverride = require('method-override');
var db = require("./models");
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));

app.get('/', function(req, res) {
  res.render("index");
});

app.get("/games", function(req, res) {
  // Try and get all records
  db.game.findAll().then(function(games) {
    // Find data within data object
    console.log(games);
    // res.render data into ejs page
    res.render("games/index", {games});
  });
});

app.get("/games/:id", function(req, res) {
  db.game.findById(parseInt(req.params.id)).then(function(game) {
    res.render("games/show", {game});
  });
})

app.listen(3000);
