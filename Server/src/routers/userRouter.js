const express=require("express")
const tryCatchMiddleware = require("../middlewares/tryCatch")
const { userRegister, userLogin } = require("../controller/userController")
const router=express.Router()




router.post("/api/useregister",tryCatchMiddleware(userRegister))
router.post("/api/userlogin",tryCatchMiddleware(userLogin))




module.exports=router