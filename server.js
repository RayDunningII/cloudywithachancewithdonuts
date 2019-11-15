//bring express 
const express = require('express')
const app = express()
const port = 3000
//routes
app.get('/', (req, res) => {
    res.send('hello world')
})

// donut routes

//create
// ADD A NEW DONUT
app.post('/donuts', (req,res) => {
    //gets an object via req.body
    res.send('placeholder')
})


//GET ALL DONUTS
app.get('/donuts', (req,res) => {
    res.send('sorry no donuts yet')
})

// GET A SINGLE DONUT 
app.get('/donuts:id',(req,res) => {
    res.send('a single donut')
})


// DELETE DONUT
app.delete('/donuts/:id',(req,res) => {
    res.send('A single donut');
})



//UPDATE A DONUT
app.patch('/donuts/:id',(req,res) => {
    //req.body
    res.send('placeholder update')
})




//listen on port
app.listen(port, function () {
 console.log('ready')
})

