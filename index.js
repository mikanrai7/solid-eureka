let Express = require('express'); 
let mysql = require('mysql');
let app = Express();

console.log("Hello World 2.0");
app.listen(3000);

app.get('/index.html', (req, res)=>{
    res.sendFile(__dirname + '/view/index.html');
})

// app.get('/name/:name', (req, res)=>{
//     let name = req.params.name;
//     res.send(("I am " + name));
// })

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users"
});

con.connect(function(error) {
    if (error) throw error;
    
    con.query("SELECT * FROM users", function(error, result, fields){
        if (error) throw error;
    

        console.log(result);
    });

    let insert1 = "INSERT INTO users (firstname, age, lastname) VALUES ('Aayush', 68, 'Gupta') ";
    let insert2 = "INSERT INTO users (firstname, age, lastname) VALUES ('Tupu', 17, 'Gupta') ";
    let insert3 = "INSERT INTO dependent (u_id, child_name, child_age) VALUES (1 , 'Tukamon', 69) ";

    let select1 = "SELECT * FROM users";
    let select2 = "SELECT * FROM users WHERE firstname = 'payush'";

    
   // let advanceJoin = "SELECT dependent.child_name FROM users JOIN dependent ON users.id = dependent.u_id";
    let del = "DELETE FROM users WHERE firstname = 'aayush'";
    let update = 'UPDATE users SET firstname = "payush"  WHERE firstname = "aayush"';

    con.query(select2);
});

console.log('hello');