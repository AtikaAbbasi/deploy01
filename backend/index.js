import express  from "express"
import dotenv from "dotenv"
import dbconnection from "./config/db.js"
import cors from 'cors'
import authroutes from './routes/authroutes.js'


// main app 
let app = express()


dotenv.config()
dbconnection()

//middlwares
app.use(express.json())
app.use(cors())



app.use('/api/auth', authroutes)


app.get('/', (req , res)=>{
    res.send('hello world')
})

app.listen(process.env.PORT ,()=> console.log(`server running on port ---------------`, process.env.PORT))