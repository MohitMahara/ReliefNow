import { hashPassword, comparePassword } from "../Helper/authHelper.js";
import UserModel from "../Models/userModel.js"
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const registerController = async(req, res) =>{
    try {

        const {name, email, password, phone} = req.body;

        if(!name || !email || !password || !phone){
            return res.status(400).send({
                msg : "All fields are required",
                success : false
            })
        }
        
        const isExistingUser = await UserModel.findOne({email});

        if(isExistingUser){
            return res.status(400).send({
                msg : "User already exists",
                success : false
            })
        }

        const hashedPassword = await hashPassword(password);
        
        const newUser = new UserModel({
            name, 
            email,
            password : hashedPassword,
            phone,
            role : "user",
            authProvider : "email",
            googleId : null,
            photoURL : null,
        }).save();

        return res.status(200).send({
            msg : "User registered successfully",
            success : true, 
            newUser
        })
        
    } catch (error) {
       next(error);
    }
}




export const loginController = async(req, res) =>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).send({
                msg : "All fields are required",
                success : false, 
            })
        }
        
        const user = await UserModel.findOne({email});



        if(!user){
            return res.status(400).send({
                msg : "User does not exist",
                success : false
            })
        }

        const isMatch = await comparePassword(password, user.password);


        if(!isMatch){
            return res.status(400).send({
                msg : "Invalid password",
                success : false
            })
        }

        const token = jwt.sign({ _id: user._id },  process.env.JWT_SECRET,  { expiresIn: "7d" } );

        return res.status(200).send({
            success : true,
            msg : "Login Successfully",
            user,
            token
        })
    
    } catch (error) {
       next(error);
    }
}





export const signUpWithGoogleController = async(req, res) =>{
    try {
       
      const {userData} = req.body;


       const name  = userData.name
       const email  =  userData.email
       const photo  = userData.photo
       const googleId =  userData.uid

       const isExists = await UserModel.findOne({email});
       
       if(!isExists){
          const user = await new UserModel({
              name : name,
              email: email,
              photoURL : photo,
              password : null,
              phone : null,
              role : "user",
              googleId : googleId,
              authProvider : "google"

          }).save();

          return res.status(200).send({
            msg : "User Registered Successfully",
            success : true,
            user
           })

       }

       return res.status(200).send({
        msg : "User Sign in Successfully",
        success : true,
        isExists
       })
        
    } catch (error) {
       next(error);
    }
}



export const forgetPasswordController = async(req, res) => {
    try {
        const {email} = req.body;

        const user  = await UserModel.findOne({email});
        
        if(!user){
            return res.status(400).send({
                msg : "User does not exist",
                success : false, 
            })
        }

        res.status(200).send({
            msg : "User Existed",
            success : true
        })
    } catch (error) {
      next(error);
    }
}



export const generateOtpController = async(req, res) => {
    try {
        const {email} = req.body;

        const generateOtp = Math.floor(100000 + Math.randoom() * 900000).toString();

        const otp = generateOtp();

        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth : {
                user : process.env.USER_EMAIL,
                pass : process.env.USER_PASSWORD
            }
        })


        const mailOptions = {
            from : process.env.USER_EMAIL,
            to :   email, 
            subject : "Reset Password",
            text : `Your OTP for password reset is ${otp}. it is valid for 5 minutes`
        }


        await transporter.sendMail(mailOptions);
         
        return res.status(200).send({
            msg  : "OTP sent to your email",
            success : true
        })

    } catch (error) {
        next(error);
    }
}


export const verifyOtpController = async(req, res) => {
    try {
        
    } catch (error) {
        next(error);
    }
}


export const resetPasswordController = async(req, res) => {
    try {
        const {password, email} = req.body;

        const user = UserModel.fineOne({email});

        if(!user){
            return res.status(400).send({
                msg  : "User does not exist",
                success : false
            })
        }

        const hashedPassword = await hashPassword(password);

        await UserModel.findOneAndUpdate({email}, {password : hashedPassword});

        return res.status(200).send({
            msg : "Reset password successfully",
            success : true
        })

    } catch (error) {
        next(error);
    }
}