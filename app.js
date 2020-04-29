var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var chooseImages = require('./choose_images');

var app = express();
var dir = path.join(__dirname, 'public');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var data = [];

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(3000);
console.log('Listening to port 3000');

var files = JSON.parse(fs.readFileSync('files_info.json'));
const chosenIMG = chooseImages(files);

app.get('/', function(req, res){
  res.render('index');
});
app.get('/form', function(req, res){
  res.render('form');
})
app.get('/exp1', function(req, res){
  res.render('exp1', {images:chosenIMG[0]});
  // do zmiany która 12-stka jest podawana do renderu
});

app.post('/exp1/data', urlencodedParser, function(req, res){
  data.push(json(req.body));
  console.log(data);
});

app.post('/information', urlencodedParser, function (req, res) {
  console.log(req.body);
})
