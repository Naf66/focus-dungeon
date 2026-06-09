import express from "express";
import pool from "../config/db.js"
import bcrypt from "bcrypt"

const router =express.Router();


router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password,10);

  await pool.query(
    `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    `,
    [username, email, hashedPassword]
  );

  res.json({
    message: "User registered"
  });
});


router.post("/login", async(req,res)=>{
    const {email,password}=req.body;
    const result = await pool.query(
        `
        SELECT * FROM users WHERE email = $1
        `,
        [email]
    )
    const user =result.rows[0];
    if(!user){
        return res.status(404).json({
            message: "User not found"
        })
    }
    const isMatch = await bcrypt.compare(
        password,
        user.password
    )
    if(!isMatch){
        res.status(401).json({
            message: "Invalid credentials"
        })
    }

    res.json({
        message:"Login successfull"
    })
})

export default router;