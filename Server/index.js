//importing packages
const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
require("dotenv").config()



app.use(cors())
app.use(express.json())




const userRouter=require("./src/routers/userRouter")
app.use(userRouter)

const adminRouter=require("./src/routers/AdminRouter")
app.use(adminRouter)




const mongoDB = process.env.DB_URL



main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("Db connected");
}






const port=process.env.PORT

app.listen(port,()=>{
    console.log(`server listening on ${port}`);
})