// function sayHello(name){
//     console.log('Hello ' + name)
// }

// sayHello("Abhishek")

import http from 'http';

//Creating a web server with call back function
const server = http.createServer((req,res) =>{
    if(req.url ==='/'){
        res.write('Hello world')
        res.end()
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }
})

server.listen(3000)

console.log("Listening to server 3000...")