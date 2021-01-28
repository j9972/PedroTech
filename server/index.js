const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crud_pedro",
});

app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/insert', (req,res) => {
    const sqlInsert = "INSERT INTO `movie_review` (`movieName`, `movieReview`) VALUES (?,?)"
    db.query(sqlInsert, [movieName, movieReview], (err,result) => {

    })
});

/*
app.get('/' , (req,res) => {

    // 2. db라는 const가 실행이 되는지 확인을 위해 달아놓은 코드
    // const sqlInsert = 
    //   "INSERT INTO `movie_review` (`movieName`, `movieReview`) VALUES ('inception', 'good movie');"
    // db.query(sqlInsert, (err,result) => {
    //     res.send("hello pedro this is 3001 portNum");
    // })


	//1.파일 자체가 실행되는지 확인 차 만들었던 코드  res.send('hello, this port number is 3001 devStart'); -> mysql 쓰고 나서 이 코드가 남아 있으면 에러를 일으킨다.
})
*/

app.listen(3001, () => {
	console.log('running on port 3001');
});  