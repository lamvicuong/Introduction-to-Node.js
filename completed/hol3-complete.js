var express = require('express');
var app = express();
var bodyParser   = require('body-parser');

var products = [
    {id:1, name:"Fazer Kexchoklad", price:12.4},
    {id:2, name:"Snickers", price:8.2},
    {id:3, name:"Dajm", price:19.0}
];

// to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    var html = '<body style="background:bisque"><h1>Welcome to HOL #3</h1></body>';
    res.send(html)
});

app.get("/products", function(req,res){
    if(req.query.id){
        var response = products.filter( function(product){return (product.id==req.query.id);} );
        res.send(response);
    }
    else{
        res.send(products);
    }

})
app.post("/products", function(req,res){
    products.push(req.body);
    res.send({count:products.length});
})

app.listen(8080);
