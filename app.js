const express = require('express');
const app = express();
const moongoose = require('mongoose');
const dotenv = require('dotenv'); 
const userRouter = require('./routes/user-routes');
const adminRouter = require("./routes/admin-routes");
const movieRouter = require('./routes/movie-routes');
const bookingRouter = require('./routes/booking-routes');
dotenv.config(); 

const cors = require('cors');
app.use(cors());
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methods','GET','POST','PUT','DELETE');
  res.header('Access-Control-Allow-Headers','Content-Type,Authorization');
  next();
})


// MiddleWay
app.use(express.json());
app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use('/movie',movieRouter);
app.use("/booking",bookingRouter);

moongoose.connect("mongodb+srv://NikitaChauhan13:8ghpC51vgFyEfUln@movie-system.iebpoii.mongodb.net/Movies?retryWrites=true&w=majority").then(()=>{
  console.log("DATABASE CONNECTED")
});
app.listen(4500,()=>{
    console.log(`connected to server ${4500}`);
})
//8ghpC51vgFyEfUln
//mongodb+srv://NikitaChauhan13:<password>@movie-system.iebpoii.mongodb.net/?retryWrites=true&w=majority
