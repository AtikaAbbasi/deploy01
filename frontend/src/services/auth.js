import axios from "axios";
import { getToken } from "../utils/auth";
 
export const fetchUserFormServer = async () =>{
    let token = getToken();;
    if (!token) return null;
 
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/profile`,{
        headers: {Authorizetion: `Bearer${token}`}
    })
    return res.data.user 
};