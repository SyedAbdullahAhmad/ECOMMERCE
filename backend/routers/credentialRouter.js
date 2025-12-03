import express from "express"
import { createAccount,loginAccount } from "../controllers/credentialController.js";
import {adminloginAccount} from "../controllers/adminCredentialController.js"
 const router=express.Router();

router.post("/signupPage",createAccount)
router.post("/loginPage",loginAccount)
router.post("/adminLogin",adminloginAccount)
export default router;