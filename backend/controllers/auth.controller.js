import User from "../models/User.js";
import _sndEmail from "../utils/email.js";
import { signintoken } from "../utils/token.js";
import jwt from 'jsonwebtoken'

// ===================--SIGNUP_FORM--======================>

export const signup = async (req, res) => {
    try {

        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({
                success: false,
                message: 'missing requirds fields'
            })
        }

        // =================---check user---=============================>

        const isexist = await User.findOne({ email });
        if (isexist) {
            res.status(200).json({
                success: false,
                message: 'user already registered'
            })
        }

        // ===========================>--user creating--==================>


        const userRef = await User.create(req.body);
        const token = signintoken(userRef);
        res.status(201).json({
            userRef,
            token,
            success: true,
            message: 'user created '
        })




    } catch (error) {
        res.status(500).json({
            success: false,
            messsage: 'siginup failed',
            error: error.message
        })
    }
}



















// LOGIN FORM =======================



export const loginform = async (req, res) => {
    try {

        const { email, password, } = req.body;

        //user get  with password
        const userRef = await User.findOne({ email }).select('+password');

        if (!userRef || !(await userRef.checkpassword(password))) {

            return res.status(401).json({
                success: false,
                message: 'invalid credentials'

            });
        }


        // remoing passsword before sending user data to  client ================


        const userwithnopassword = userRef.toObject();
        delete userwithnopassword.password;

        const token = signintoken(userRef);
        res.status(201).json({
            user : userwithnopassword,
            token,
            success: true,
            message: 'user logged in successfuly'
        });



    } catch (error) {
        res.status(500).json({
            success: false,
            messsage: 'login failed',
            error: error.message
        })
    }
}








// =================== FORGET PASSWORD ==================



export let forgetpasswd  = async (req,res)=>{
   // console.log('res from forget passwd');

   let {email} = req.body
   let userRef = await User.findOne({email})
  
  if(!userRef) {
    return res.status(404).json({
        success:false,
        message:'user not found'
    })
  }



// reset token 

let resetToken = jwt.sign(
    {id:userRef._id},
    process.env.JWT_SECRET,
    {expiresIn: '3m'}
)


// fronted website connection............... 

let resetUrl = `${process.env.WEBSITE_URL}/resetpass/${resetToken}`

try {
 
    await _sndEmail({
        to: userRef.email,
        subject: "reset password",
        html:`
       <div style="margin: 0 auto; width: 90%; height: 500px;">
          <h1 style="color: gold;" >Reset Password</h1>
          <p style="color: gray;">
          here is link for your forget password request reset your password.
          </p>
          <p>Click here to reset <a href="${resetUrl}">Reset </a></p>
        </div>

        `
    })

     res.status(200).json({
                success: true,
                message: 'pasword reset email send '
            })


} catch (error) {
   res.status(500).json({
            success: false,
            messsage: 'reset email send failed',
            error: error.message
        })
}

}






















////////////////////////////////reset pawd


export const restepasswrd =async (req,res) =>{
    let {token, password} = req.body

try {
    
let decodeuser = jwt.verify(token,process.env.JWT_SECRET);
let userRef = await User.findById(decodeuser.id);

if(!userRef){
    return res.status(404).json({
        success: false,
        message:"user not found"
    });
}




///// updata user password ......................
userRef.password = password;
userRef.save();

res.status (200).json({
    success: true,
    message: "password updated successfully!"
})


// error message 

} catch (error) {
    res.status(500).json({
        success: true,
        message: "password reste failed ..................."
    })
}
}