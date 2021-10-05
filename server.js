/* === External Modules === */
    const express =require('express');
const product = require('./models/Product');

/* === Internal Modules === */

const Product = require('./models/Product');

/* === System Variables === */
    const app = express();

/* === System Configuration === */

// tell express that we will be using ejs 
    app.set('view engine', 'ejs');

// make public directory availible
// and our css and js will now be reachable
    app.use(express.static('public'))

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
      //  res.send(Product.find());
      // takes in the ejs file to turn into html
      // takes in the context of what data should be used 
      // .render('filename', data)
      const context = {
          students: 'Alex',
          products: Product.find(),
      };

      res.render('index', context);
    });


//  show ---- FIXME
    app.get('/products/:id', function (req, res, next) {
        Product.findById(req.params.id, function (error, product) {
            if (error) {_
                req.error = error;
                return next();
            }

               const context = {
                   product, 
                };
                
            res.render('show', context );
        
        });
    });
    

    app.get('/*', function(req, res) {
        const context = {error: req.error };
        res.render('404', context);
    });

/* === Server Listener === */
    app.listen(4000, function (){
        console.log('Listening for Client Requests on port 4000')
    });