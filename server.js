const express = require('express')
const app = express()

const port = 3000


app.use(express.json())


app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})


const users =  [
    {name:"dhananjai",age:25,email:"dhananajai@gmail.com"},
    {name:"manoj",age:25,email:"dhananajai@gmail.com"}
]




app.get("user-info",(req,res)=>{
    const name = req.query.name


    if(!name){
        res.status(400).json({
            message:"enter a username"
        })
    }
    const info = users[name]

    const response = {
        name:name,
        age: info.age,
        email: info.email
    }

    res.send(response)
})


