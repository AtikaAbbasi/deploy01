import { useState } from "react";
import { useNavigate , NavLink, Navigate} from "react-router-dom";
import axios from "axios";
import { setToken, setUser } from "../utils/auth.js";


const AuthForm = () => {

    let navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("login");
//   const [showPassword, setShowPassword] = useState(false);
const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: ""
})


   //====================== sitting ============================


   
   const handleChange = (e) =>{
setformdata(
    {
    ...formdata,
  [e.target.name ]: e.target.value ,
}

)
   }

   /// ========================= SIGN UP  ==============================

   const handleSignup = async(e) =>{
e.preventDefault()
try {

  console.log('before saving userrrrrrrr');
  
    const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, formdata)

    console.log('after saving userrrrrrrr');
if(data.success){
    console.log(" .....!!!",data);
    setToken(data.token);
    setUser(data.userRef)
    /// reset form
    setformdata(
        {
            name: "",
            email: "",
            password: "",
        }
    );
    setTimeout(()=>{
        navigate('/')
    },200)
}else{

}

    
} catch (error) {(e)=> {
        console.log('Sigup Failed ')
    }
}

   }





















   ///========================login///========================
   


  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        { email: formdata.email, password: formdata.password })
        console.log(" .....!!!",data);
      if (data.success) {
        setToken(data.token);
        setUser(data?.user)
        /// reset form
        setformdata(
          {
            name: "",
            email: "",
            password: ""
          }
        );
        navigate("/")

      } else {
        console.log("Login Fail ", data.message);
      }

    } catch {
      (e) => {
        console.log("Login Failed : ", e);

      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setActiveTab("login")}
            className={`px-4 py-2 font-semibold rounded-full transition duration-300 ${activeTab === "login"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-600 hover:text-red-600"
              }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("create")}
            className={`px-4 py-2 font-semibold rounded-full transition duration-300 ${activeTab === "create"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-600 hover:text-red-600"
              }`}
          >
            Create Account
          </button>
        </div>














        {activeTab === "login" && (
          <form 
          onSubmit={handleLogin} 
          className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                name="email"
                value={formdata.email}
                onChange={handleChange}
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <div className="relative">
                <input
                  name="password"
                  value={formdata.password}
                  onChange={handleChange}
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Enter your password"
                />
             
              </div>
            </div>
         
         <NavLink to="/forgotpswd"  >
          <button
              className="w-full px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
            >
             Forgot Password
            </button>
         </NavLink>
 <br /> <br />
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
            >
              Login
            </button>
          </form>
        )}
























        {activeTab === "create" && (
          <form 
          onSubmit={handleSignup} 
          className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Full Name</label>
              <input
                name="name"
                value={formdata.name}
                onChange={handleChange}
                type="text"
              
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                name="email"
                value={formdata.email}
                onChange={handleChange}
                type="email"
              
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <input
                name="password"
               
                onChange={handleChange}
                type="password"
                value={formdata.password}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
            >
              Create Account
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;