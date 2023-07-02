const express = require('express');
const mongoDB = require("./db");

const app = express();
const port = 5000;

mongoDB();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Resquested-Width,Content-Type,Accept"  
    );
    next();
})

// app.get('/', (req, res) => {
//   res.send('hello world')
// })

app.use(express.json());

app.use('/api',require('./Routes/CreateUser'));

app.listen(port,()=>{
    console.log(`app running on port no ${port}`)
});
