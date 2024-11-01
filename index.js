import express from 'express';
//calling the object express
const app = express()

const courses = [
    {id:1, name: 'course1'},
    {id:2, name: 'course2'},
    {id:3, name: 'course3'}
]

//GET Method
//Take two arguments, path and callback function(aka route handler)
app.get('/', (req,res)=>{
    res.send("Hello World!")
})

app.get('/api/courses', (req,res)=>{
    res.send([1,2,3])
})

//to read the value of parameter
app.get('/api/courses/:id', (req,res)=>{
    res.send(req.params.id)
})

//creating and API to search the array
app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send('The course with given ID was not found!')
        res.send(course)
})

//Creating dynamic porting address
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Listening to ${port}.....`))