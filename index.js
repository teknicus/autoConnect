const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/register',(req, res) => regUser(req, res));

function regUser(req, res){
    console.log(req);
    res.send('Received Data.');
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))