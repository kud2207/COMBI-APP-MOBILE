import { ErrorLogin } from "./enums";
import { DataUser } from "./types";

//Verification de Creation de compte
export const VerifiedLoginUp = ({ name,  phoneNumber, password, confirmPassword }: DataUser) => {

  const phoneRegex = /^[0-9]+$/;  // Regex qui accepte uniquement des chiffre
  if (name == "" || phoneNumber == '' || password == '' || confirmPassword == '') {
    return ErrorLogin.erro4
  }
  else if (!phoneRegex.test(phoneNumber) || phoneNumber.length < 6) {
    return ErrorLogin.erro2
  } else if (password.length < 1) {
    return ErrorLogin.erro5
  }
  else if (password != confirmPassword) {
    return ErrorLogin.erro3
  }
}

//Verification du Login au compte
export const VeriedLoginIn = async(
  { phoneNumber, password }
  : { phoneNumber: string, password: string}
) => {
  
  if (phoneNumber == '' && password == '') {
    return   ErrorLogin.erro4
  } else if (phoneNumber == '' || password == '') {
    return  ErrorLogin.erro8
  }

}


