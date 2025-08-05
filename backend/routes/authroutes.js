import { Router } from "express";
import { signup , loginform, forgetpasswd, restepasswrd } from "../controllers/auth.controller.js";


const router = Router();

router.post('/signup', signup)
router.post('/login', loginform)
router.post('/forgotpass' , forgetpasswd)
router.post('/resetpass' , restepasswrd)




export default router;

