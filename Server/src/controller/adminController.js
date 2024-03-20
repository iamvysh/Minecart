const Admin=require("../model/AdminSchema")
const jwt=require('jsonwebtoken')
const Product=require("../model/ProductSchema")

const adminLogin=async(req,res)=>{
    const {email,password}=req.body

    if(email===process.env.ADMIN_EMAIL&&password===process.env.ADMIN_PASSWORD){

        const accessToken=jwt.sign({email:email},process.env.ADMIN_PRIVATE_KEY)

        return res.status(200).json({
            message:"admin login successfull",
            data:accessToken
        })
    return res.status(400).json({
        message:"invalid credentials"
    })
}
}

const addProduct=async(req,res)=>{
    const {title,description,price,image}=req.body

    const product= new Product({
        title:title,
        description:description,
        price:price,
        image:image

    })
    await product.save()

    res.status(201).json({
        message:"successfull",
        data:product
    })
}

const updateProduct=async(req,res)=>{
    const {title,description,price,image}=req.body
    const id=req.params.id

    const product=await Product.findByIdAndUpdate(id,{$set:{title,price,description,image}},{new:true})

    res.status(201).json({
        message:"product updation success",
        data:product
    })
}

const deleteProduct=async(req,res)=>{
    const id=req.params.id

    const product=await Product.findByIdAndDelete(id)

    res.status(200).json({
        message:"product deletion successfull",
        data:product
    })
}

const getAllproducts=async(req,res)=>{
    const products=await Product.find()
    res.status(200).json({
        message:'success',
        data:products
    })
}
 

const getAproductById=async(req,res)=>{
    const id=req.params.id
    

    const product=await Product.findById(id)

    res.status(200).json({
        message:"success",
        data:product
    })
}

module.exports={adminLogin,addProduct,updateProduct,deleteProduct,getAllproducts,getAproductById}

