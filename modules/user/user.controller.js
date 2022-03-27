import { UserService } from "./user.service";
import { RESPONSE } from "../../common/responseHandler";
import logger from "../../common/logger";
const accountSid = "AC3c758e52f5f584338257a263039b5dc7";
const authToken = "f16f2063fcf85dc70d2efd814aaf652f";
const client = require('twilio')(accountSid, authToken);
const otpGenerator = require('otp-generator')

export const createUser = async (req, res) => {
  try {

 

let otp = otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false });



client.messages
  .create({
     body: `otp for login is  ${otp}`,
     from: '+17752565844',
     to: '+918882203153'
   })
  .then(message => console.log("messsage:::" ,message.sid , message)).catch((err) =>{
    console.log("err" , err)
  })

  // user model mai save

  return res.status(200).send({ data:"otp sent", status: 200 });
  
  // let data = await UserService.createUser(req, res);

    // let result = await UserService.JwtSignIn(data);

    // return RESPONSE.Created(result, res);
  } catch (error) {
    // console.log(error.message);
    console.log(error)
    logger.info(error);
    return RESPONSE.ServerError(res);
  }
};

export const login = async (req, res) => {
  try {
    let data = await UserService.login(req, res);

    let result = await UserService.JwtSignIn(data);

    return RESPONSE.Ok(result, res);
  } catch (error) {
    // console.log(error.message);
    logger.info(error);
    return RESPONSE.ServerError(res);
  }
};

export const createTask = async (req, res) => {

  try {
    let data = await UserService.createTask(req, res);

    return RESPONSE.Ok(result, res);
  } catch (error) {
    // console.log(error.message);
    logger.info(error);
    return RESPONSE.ServerError(res);
  }

}
