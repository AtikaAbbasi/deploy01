import mongoose from "mongoose";


const dbconnection = ()=>{
return mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('db connected ');
        
       }).catch((err)=>{
        console.log('error in db connnection' , err);
        
       })
}

export default dbconnection