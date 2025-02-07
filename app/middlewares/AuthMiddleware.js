import { TokenDecode } from "../utility/TokenUtility.js";

export default (req, res, next) => {
  let token = req.headers["token"];
  console.log(token);

  let decoded = TokenDecode(token);
  if (decoded === null) {
    res.status(401).send({ status: "Fail", message: "Unauthorized" });
  } else {
    // Retrive email & user_id from token
    let email = decoded.email;
    let user_id = decoded.user_id;

    // Add with request header
    req.headers.email = email;
    req.headers.user_id = user_id;

    next();
  }
};
