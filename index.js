const express= require('express');

const app = express();
app.use(express.json());       // to support JSON-encoded bodies
app.get('/',(req,res)=>{
    res.send({hi:'there'})
})


// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }
app.get('/states/:stateName/', function (req, res) {
    res.send(req.params)
  })
const PORT = process.env.port || 5000;
app.listen(PORT);