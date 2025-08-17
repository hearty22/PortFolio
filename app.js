import express from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.static("public"))
app.use(express.json());


app.get("/",(req, res)=>{
    res.send("/public/index.html");
});

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
})



