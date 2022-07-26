const express = require('express')
const app = express()
const port = 3621
const bodyParser = require("body-parser")
const ejs = require('ejs')

app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
res.send('Hello')
});

app.get("/person",(req,res)=>{
    // let personName = req.body.name;
    // let personAge = req.body.age;
    // res.json({name:personName,personAge})
    res.render('person')
});

app.post("/person",(req,res)=>{

    let personName = req.body.name;
    let personAge = req.body.age;

    res.json({name:personName,age:personAge})
});

app.listen(port, () => {
console.log(`Listening on port ${port}!`)
});
