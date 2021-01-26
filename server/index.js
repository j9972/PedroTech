const express = require('express')
const app = express()

app.get('/' , (req,res) => {
	res.send('hello, this port number is 3001');
})

app.listen(3001, () => {
	console.log('running on port 3001');
});  