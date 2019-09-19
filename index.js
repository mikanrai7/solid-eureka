let Express = require('express'); 
let app = Express();

console.log("Hello World 2.0");
app.listen(3000);

app.get('/index.html', (req, res)=>{
    res.sendFile(__dirname + '/view/index.html');
})


