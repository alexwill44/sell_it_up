/* === External Modules === */
    const express =require('express');

/* === Internal Modules === */

const Product = require('./models/product');

/* === System Variables === */
    const app = express();

/* === Routes === */

/* 
    M odels
    V eiws
    C controllers
*/

// .get('url', call back function(request, responce){})
 
// == products


//  index 
    app.get('/products', function(req, res){
        res.send(Product.find);
    });


//  show 
    app.get('/products/:id', function (req, res){
       Product.findById(req.params.id, function ( error, product) {
           if (error){
              return res.send(error)
           }{
               res.send(product);
           }
       });
    });

/* === Server Listener === */
    app.listen(4000, function (){
        console.log('Listening for Client Requests on port 4000')
    });