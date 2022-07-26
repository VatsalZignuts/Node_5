const express = require('express')
const app = express()
const port = 3620

app.get('/', (req, res) => {
res.send('Welcome')
});

app.get("/person",(req,res) => {

    let personName = req.query.name;
    res.json({name:personName})

});

app.listen(port, () => {
console.log(`listening on port ${port}!`)
});
 
// person?name=chintu