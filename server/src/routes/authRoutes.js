import express from "express";
import pool from "../config/db.js"
import bcrypt from "bcrypt"
import {registerUser,loginUser} from "../controllers/authController.js";

const router =express.Router();


router.post("/register", registerUser );
router.post("/login",loginUser);

export default router;