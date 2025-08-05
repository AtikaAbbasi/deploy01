import nodemailer from 'nodemailer'



const _sndEmail = async(body)=>{

try {
  
 const transporter = nodemailer.createTransport({

service:"gmail",
auth:{
   user:process.env.EMAIL_NODEMAILER,
   pass: process.env.APP_PASSWORD, 
},

 }) 
 await transporter.sendMail(

{

from: `ECOM <${process.env.EMAIL_NODEMAILER}>`,
...body

})  

console.log("Email Send >>>>>>>>>>", body.to);


} catch (error) {
    console.log("failed to snd email...>>>>>", error.message);
    throw new Error('Failed to send email.....')
    
}

}
export default _sndEmail;