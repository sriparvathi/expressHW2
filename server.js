// Loading express
const express = require ('express');
// create our express app
const app = express();

// make a route to send a msg to screen or webpage.
app.get('/greeting', function(req, res){
    res.send('<h1>Hello,starnger</h1>');
});
app.get('/greeting/:name', function(req, res){
    res.send('What\'s up ' + req.params.name);
});
// write arrow function instead of conventional function
app.get('/tip/:total/:tipPercentage', (req, res) => {
     console.log("hello");
     //res.send("here is your tip");
     let result= (req.params.total * (req.params.tipPercentage / 100));
    res.send(`${result}`);
});
//Tell the app or server to listen for requests or port
let port = 3000;
app.listen(port, function(){
    console.log(`Listening on ${port}`);
});

