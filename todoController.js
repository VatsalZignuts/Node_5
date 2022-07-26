var bodyParser = require ('body-parser');

var data = [{item: 'one'}, {item: 'two'}, {item: 'three'}];
var urlencodedParser = bodyParser.urlencoded({extended:false});


module.exports = (app) => {

app.get('/', (req, res) => {
res.send('Welcome')
});

app.get('/todo',(req,res)=>{
    res.render('todo',{todos: data});
  
});

app.post('/todo',urlencodedParser,(req,res)=>{ 
    console.log(req.body);
    console.log(req.query);
    data.push(req.body);
    console.log(data,"data added",data);
    res.json(data);
    //console.log(data,"data added");
});

app.delete('/todo',(req,res)=>{

});


} 