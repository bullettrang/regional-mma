const express= require('express');
const app = express();
const mmaAPI = require('./scrapeFighters.js');
app.use(express.json());       // to support JSON-encoded bodies
app.get('/',(req,res)=>{
    res.send({hi:'there'})
})


// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }
app.get('/states/:stateName/',  async (req, res)=> {
  
  const chosenState = req.params.stateName.toLowerCase();
  console.log(chosenState);
  const listOfFighters=await mmaAPI.getFighters(chosenState);
  console.log(listOfFighters);
    res.send(listOfFighters)
  })
const PORT = process.env.port || 5000;
app.listen(PORT);