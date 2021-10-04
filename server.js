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

    // cats route
    app.get('/cats', function (request, responce){
        responce.send('Charley')
    })

    //dogs route
    app.get('/dogs', function (request, responce){
        responce.send('Milo')
    });

/* === Server Listener === */
app.listen(4000, function (){
    console.log('Listening for Client Requests on port 4000')});