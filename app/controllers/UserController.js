import UserModel from "../models/UserModel.js";
import SendEmail from "../utility/EmailUtility.js";
import { TokenEncode } from "../utility/TokenUtility.js";

export const Registration = async (req, res) => {
  try {
    let reqBody = req.body;
    await UserModel.create(reqBody);

    return res.json({
      status: "Success",
      Message: "User Registered Successfully",
    });
  } catch (err) {
    return res.json({ status: "failed", message: err.toString() });
  }
};

export const Login = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await UserModel.findOne(reqBody);

    if (data === null) {
      return res.json({ status: "fail", message: "User not found" });
    } else {
      // if user exist then Encode a Token
      let Token = TokenEncode(data["email"], data["_id"]);
      return res.json({status: "success",token: Token,message: "User Logged In"});
    }
  } catch (err) {
    return res.json({ status: "fail", message: err.toString() });
  }
};

export const Profiledetails = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    let data = await UserModel.findOne({ _id: user_id });

    return res.json({
      status: "Success",
      data: data,
      Message: "User Profiledetails",
    });
  } catch (err) {
    return res.json({ status: "fail", message: err.toString() });
  }
};

export const ProfileUpdate = async (req, res) => {
  try {
    let reqBody = req.body;
    let user_id = req.headers["user_id"];
    await UserModel.updateOne({ _id: user_id }, reqBody);
    return res.json({
      status: "success",
      message: "User profile updated successfully",
    });
  } catch (err) {
    return res.json({ status: "fail", message: err.toString() });
  }
};

export const EmailVerify = async (req, res) => {
  try {
    let email = req.params.email;

    let data = await UserModel.findOne({email: email});

    if(data === null){
      return res.json({ status: "fail", message: "Email does not exist" });
    }else{
      let code = Math.floor(100000 + Math.random() * 900000);
      let email = data['email'];
      let emailtext = "Your Code is " + code; 
      let emailSubject = "Task Manager Verification Code";
      await SendEmail(email, emailtext, emailSubject);

      await UserModel.updateOne({email: email}, {otp: code})
      return res.json({
        status: "Success",
        Message: "Email Verification sent",
      });
    }

  } catch (err) {
    return res.json({ status: "fail", message: err.toString() });
  }
  
};

export const CodeVerify = async (req, res) => {

  try{
    let email = req.params.email;
    let code = req.params.code;
  
    let data = UserModel.findOne({email: email, otp : code});
  
    if(data == null){
      return res.json({status: "fail", message: "Wrong Verification Code"})
    }else{
      return res.json({status: "success", message: "Verification Success"});
    }
  }catch{

  }
};

export const ResetPassword = async (req, res) => {
  return res.json({
    status: "Success",
    Message: "Password Reset Successfull",
  });
};


export const AllUsers = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    let data = await UserModel.find();

    return res.json({
      status: "Success",
      data: data,
      Message: "User Profiledetails",
    });
  } catch (err) {
    return res.json({ status: "fail", message: err.toString() });
  }
};