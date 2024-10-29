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
export const VeriedLoginIn = (
  { phoneNumber, password, phoneNumberVerified, passwordVerified }
    : { phoneNumber: string, password: string, phoneNumberVerified: string, passwordVerified: string }
) => {
  if (phoneNumber == '' && password == '') {
    return ErrorLogin.erro4
  } else if (phoneNumber == '' || password == '') {
    return ErrorLogin.erro8
  }
  else if (phoneNumber != phoneNumberVerified || password != passwordVerified) {
    return ErrorLogin.erro6
  }
}


