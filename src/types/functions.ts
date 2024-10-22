import { ErrorLogin } from "./enums";
import { DataUser } from "./types";

//Verification de Creation de compte
export const VerifiedLoginUp = ({ idCombi, name, secondName, phoneNumber, password, confirmPassword }: DataUser) => {

  const phoneRegex = /^[0-9]+$/;  // Regex qui accepte uniquement des chiffre
  if (idCombi == "" && name == "" && secondName == '' && phoneNumber == '' && password == '' && confirmPassword == '') {
    return ErrorLogin.erro4
  } else if (idCombi == '') {
    return ErrorLogin.erro11
  }
  else if (name == '' || secondName == '') {
    return ErrorLogin.erro1
  } else if (!phoneRegex.test(phoneNumber) || phoneNumber.length < 6) {
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
    : {phoneNumber: string, password: string, phoneNumberVerified: string, passwordVerified: string }
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

//verification si le Id Existe deja ::use storage
export const isIdStore = async ({ idStore }: { idStore: string }) => {
  const jsonValue = await AsyncStorage.getItem(idStore)
  if (jsonValue != null) {
    return true
  } else { return false }
}

//funtion pour Recuper Le storage ::use storage
import AsyncStorage from '@react-native-async-storage/async-storage';
export const getStoredData = async ({idCombi}:{idCombi :string}): Promise<DataUser | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(idCombi);

    // Si les données existent, les parser et les retourner
    if (jsonValue != null) {
      const parsedValue = JSON.parse(jsonValue);
      console.log("Données récupérées depuis le local storage :", parsedValue);
      return parsedValue;
    } else {
      console.log("Aucune donnée trouvée dans le local storage");
      return null
    }
  } catch (e: any) {
    console.error("Erreur lors de la récupération du local storage", e.message);
    throw new Error("Une erreur est survenue lors de la récupération des données");
  }
};
