import express from 'express';
//calling the object express
const app = express()

//GET Method
//Take two arguments, path and callback function(aka route handler)
app.get('/', (req,res)=>{
    res.send("Hello World!")
})

app.get('/api/courses', (req,res)=>{
    res.send([1,2,3])
})

app.listen(3000, ()=> console.log('Listening on Port 3000...'))