var express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser');
//APP CONFIG
mongoose.connect('mongodb://localhost/blogapp');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

var Blog = mongoose.model('Blog', blogSchema);


//RESTFUL ROUTES
app.get('/',function(req,res){

});


app.listen(3000,function(){
  console.log('listening on port 3000');
})
