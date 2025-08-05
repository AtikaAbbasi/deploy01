import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import Profile from '../Components/Profile'
import AuthForm from '../Components/AuthForm'
import ProctectedRoutes from '../Components/ProctectedRoutes'
import ForgetPassword from '../Pages/ForgetPassword'
import ResetPaswd from '../Pages/ResetPaswd'


const router = createBrowserRouter([

{
    Path: '/',
    element:<App/>,
    children:[
        {

        index : true,
        element:(
         <Home/>
        )
},{
    path: '/profile',
    element: (
        <ProctectedRoutes>
            <Profile/> 
        </ProctectedRoutes>
   
)},
    ]
},

{path:'/auth', element: <AuthForm/>}
,{path:'/forgotpswd', element: <ForgetPassword/>}
,{path:'/resetpass/:token', element: <ResetPaswd/>}

])


export default router