import express, { json } from "express";
import cors from "cors";
import pool from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"

const app = express();
const PORT = 5000;

app.use(cors());
app.use(json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Focus Dungeon API Running"
  });
});

app.get("/test-db",async(req,res)=>{
  const result = await pool.query("SELECT NOW()");

  res.json({
    message: "Database connected",
    time: result.rows[0]
  })
})



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});