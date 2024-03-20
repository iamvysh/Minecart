const express=require("express")
const tryCatchMiddleware = require("../middlewares/tryCatch")
const { adminLogin, addProduct, updateProduct, deleteProduct, getAllproducts, getAproductById } = require("../controller/adminController")
const authorizeAdmin = require("../middlewares/adminAuthiriztion")
const authorizeUser = require("../middlewares/userAuthorization")
const router=express.Router()



router.post("/api/adminlogin",tryCatchMiddleware(adminLogin))
router.post("/api/addproduct",authorizeAdmin,tryCatchMiddleware(addProduct))
router.put("/api/updateproduct/:id",authorizeAdmin,tryCatchMiddleware(updateProduct))
router.delete("/api/deleteproduct/:id",authorizeAdmin,tryCatchMiddleware(deleteProduct))
//common route for getting data for both user and adimin
router.get("/api/products",authorizeAdmin||authorizeUser,tryCatchMiddleware(getAllproducts))
router.get("/api/product/:id",authorizeAdmin||authorizeUser,tryCatchMiddleware(getAproductById))






module.exports=router