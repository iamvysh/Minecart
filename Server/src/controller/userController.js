const User=require("../model/UserSchema")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")




const userRegister=async(req,res)=>{
    
    const {username,password,email}=req.body

    const existingUser=await User.findOne({email:email})
    if(existingUser){
        return res.status(402).json({
            message:"user already exists,please login",

        })
    }
     
    const hashedPassword= await bcrypt.hash(password,10)

    const user=new User({email:email,password:hashedPassword,username:userRegister})

    await user.save()

    return res.status(201).json({
        message:"user registration success",
    })


}

const userLogin=async(req,res)=>{
    const {email,password}=req.body

    const user=await User.findOne({email:email})

    if(user&&bcrypt.compare(password,user.password)){
         
        const accessToken=jwt.sign({email:email},process.env.USER_PRIVATE_KEY)

        return res.status(200).json({
            message:"user login successfull",
            data:accessToken
        })
        

    }

    return res.status(401).json({
        message:"invalid credentials"
    })
}



module.exports={userRegister,userLogin}