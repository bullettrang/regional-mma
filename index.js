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
app.get('/api/states/:stateName/',  async (req, res)=> {
  
  const chosenState = req.params.stateName.toLowerCase();
  console.log(chosenState);
  const listOfFighters=await mmaAPI.getFighters(chosenState);
  console.log(listOfFighters);
    res.send(listOfFighters)
  })

  if(process.env.NODE_ENV === 'production'){

    //express will serve up our production assets
    //like main.js file
    app.use(express.static('frontend/regional-mma2/build'));        
    //express will serve index.html if it doesn't recognize the route
    const path =require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend/regional-mma2','build','index.html'));
    })
}
const PORT = process.env.port || 5000;
app.listen(PORT);