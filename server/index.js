const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crud_pedro",
})

app.get('/' , (req,res) => {

    const sqlInsert = 
      "INSERT INTO movie_review (movieName, movieReview) VALUES ('inception', 'good movie')"
    db.query(sqlInsert, (err,result) => {
        res.send("hello pedro");
    })
	//res.send('hello, this port number is 3001 devStart'); -> mysql 쓰고 나서 이 코드가 남아 있으면 에러를 일으킨다.
})

app.listen(3001, () => {
	console.log('running on port 3001');
});  