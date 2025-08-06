import mongoose from "mongoose";
import bcrypt from "bcryptjs";


let userschma = mongoose.Schema({

name: {
type:String,
required:true

},
email: {
type:String,
required:true,
unique: true,
lowercase:true,

},
password: {
type:String,
required:true,
minlength:8,

},
role: {
type:String,
enum:['user','admin'],
default: 'user'
}

},

{timestamps: true}
)





//==================>---heahing pasawd---======================= >


userschma.pre('save', async function(next){

if(!this.isModified('password')){

return next()

}
this.password = await bcrypt.hash(this.password , 15)


})

// ============================>--custom Method--=========================>

userschma.methods.checkpassword = function(simplePassword){
    return bcrypt.compare(simplePassword , this.password)
}

// checkpassword(req.body.password , user.password)


// =================--usershcema--=================>
let User = mongoose.model('user', userschma)
export default User