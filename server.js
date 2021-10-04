/* === External Modules === */
    const express =require('express');

/* === Internal Modules === */

/* === System Variables === */
    const app = express();

/* === Routes === */

// .get('url', call back function(request, responce){})

// home route
    app.get('/', function (request, responce) {
// request is incoming
// responce is outgoing

// .send(data)
    responce.send('Hellow World');
    });

// temp database
    const products = [ 't-shirt', 'shoes', 'necklace', 'Baller wrist band'];

// products 
    app.get('/products', function(req, res){
        res.send(products);
    });

/*   // first product 
    app.get('/products/0', function(rec, res){
        res.send(products[0]);
    });

//second product
    app.get('/products/1', function(rec, res){
        res.send(products[1]);
    });

//thrid product
    app.get('/products/2', function(rec, res){
        res.send(products[2]);
    }); */

// product show 

// NOTE ORDER MATTERS 

// product HELP
    app.get('/products/help', function (req, res){
        res.send('Help');
    })
   
// url parameters
    app.get('/products/:index', function (req, res){
        console.log(req.params);
        res.send(products[req.params.index]);
    });


// cats route
    app.get('/cats', function (request, responce){
        responce.send('Charley');
    })

//dogs route
    app.get('/dogs', function (request, responce){
        responce.send('Milo');
    });

// server params 
    app.get('/user/:id', (req, res) => {
        res.send(req.params);
    });

// multiple paramsc - all params must be provided to hit the route 
// add nums
    app.get ('/add/:x/:y', function (req, res){
    
        const x = parseInt(req.params.x);
        const y = parseInt(req.params.y);

        res.send(`${+x+y}`);
    });

// Query params - are optional
// ?q=cats&type=gif
    app.get('/search', function (req, res){
        res.send(req.query);
    });

/* === Server Listener === */
    app.listen(4000, function (){
        console.log('Listening for Client Requests on port 4000')
    });