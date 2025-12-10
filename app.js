require("dotenv").config();
const express = require("express");
const router = require('./routers/router.js');
const cors = require("cors");

const app = express();
app.use(express.json());

const corsOption ={
    origin:"https://fcandsonsconsulting.vercel.app",
    methods: "GET, PUT, PATCH, DELETE, POST, HEAD",
    credentials:true,
    allowedHeaders: ["Content-Type", "Authorization"]
}
app.use(cors(corsOption));
app.use("/",router);




app.listen(5000,()=>{
    console.log("Runnig");
})
