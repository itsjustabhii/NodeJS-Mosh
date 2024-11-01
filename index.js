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

//Creating dynamic porting address
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Listening to ${port}.....`))