// Loading express
const express = require ('express');
// create our express app
const app = express();

// make a route to send a msg to screen or webpage.
// Greetings
app.get('/greeting', function(req, res){
    res.send('<h1>Hello,starnger</h1>');
});
app.get('/greeting/:name', function(req, res){
    res.send('What\'s up ' + req.params.name);
});
// Tip Calculator
// write arrow function instead of conventional function
app.get('/tip/:total/:tipPercentage', (req, res) => {
     console.log("hello");
     //res.send("here is your tip");
     let result= (req.params.total * (req.params.tipPercentage / 100));
    res.send(`${result}`);
});
//Magic 8 Ball
app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    let arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"] 
    let randomQuote = (Math.floor(Math.random()*arr.length));
    res.send (`Will%20I%20Be%20A%20Millionaire ${arr[randomQuote]}`);
});
//Tell the app or server to listen for requests or port
let port = 3000;
app.listen(port, function(){
    console.log(`Listening on ${port}`);
});

