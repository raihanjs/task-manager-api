export const Registration = async (req, res) => {
  return res.json({
    status: "Success",
    Message: "User Registered Successfully",
  });
};

export const Login = async (req, res) => {
  return res.json({
    status: "Success",
    Message: "User Logged In Successfully",
  });
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
