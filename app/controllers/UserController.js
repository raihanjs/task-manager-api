import UserModel from "../models/UserModel.js";
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
    return res.json({ status: "fail", message: err.toString() });
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
      return res.json({
        status: "success",
        token: Token,
        message: "User Logged In",
      });
    }
  } catch (err) {
    return res.json({ status: "fail", message: err.toString() });
  }
};

export const Profiledetails = async (req, res) => {
  return res.json({
    status: "Success",
    Message: "User Profiledetails",
  });
};

export const ProfileUpdate = async (req, res) => {
  return res.json({
    status: "Success",
    Message: "User Profile Updated Successfully",
  });
};

export const EmailVerify = async (req, res) => {
  return res.json({
    status: "Success",
    Message: "Email Verified Successfully",
  });
};

export const CodeVerify = async (req, res) => {
  return res.json({
    status: "Success",
    Message: "Code Verified Successfully",
  });
};

export const ResetPassword = async (req, res) => {
  return res.json({
    status: "Success",
    Message: "Password Reset Successfull",
  });
};
