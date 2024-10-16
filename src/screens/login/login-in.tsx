import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  NavigationPropsDrawerNavigator,
  NavigationPropsLoginIn,
} from "../../types/types";
import { TextInput, Button, ActivityIndicator, Text } from "react-native-paper";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import { normal } from "../../constants/color";
import { getStoredData, isIdStore, VeriedLoginIn } from "../../types/functions";
import { ErrorLogin } from "../../types/enums";

const LoginIn: React.FC = () => {
  const navigation = useNavigation<
    NavigationPropsLoginIn | NavigationPropsDrawerNavigator
  >();

  const [formData, setFormData] = useState({
    idCombi: "",
    phoneNumber: "",
    password: "",
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  /** Gestion de la connexion COMBO--APP  */
  const [errorAf, setErrorAf] = useState<string>(""); // Affiche l'erreur de login

  // Fonction pour mettre à jour les valeurs de phoneNumber et password
  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  //Login
  const handleConnexion = async () => {
    const isIdStore1 = await isIdStore({ idStore: formData.idCombi });
    if (isIdStore1) {
      const storedData = await getStoredData({ idCombi: formData.idCombi });
      if (storedData) {
        const { phoneNumber, password } = storedData; // Utilise les données du form
        const phoneNumberVerified1 = phoneNumber;
        const passwordVerified1 = password;
        const phone = formData.phoneNumber;
        const pwd = formData.password;

        // Valide les données récupérées
        const verifiedLogin = VeriedLoginIn({
          phoneNumber: phone,
          password: pwd,
          phoneNumberVerified: phoneNumberVerified1,
          passwordVerified: passwordVerified1,
        });

        if (verifiedLogin) {
          setErrorAf(verifiedLogin);
        } else {
          setErrorAf("isCorrect");
          setTimeout(() => {
            navigation.navigate("DrawerNavigator");
          }, 3000);
        }
      } else {
        setErrorAf(ErrorLogin.erro9);
      }
    } else {
      if(formData.idCombi=="" && formData.password=="" && formData.phoneNumber=="" ){
        setErrorAf(ErrorLogin.erro4)
      }else{setErrorAf(ErrorLogin.erro12);}
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.imageBG}
        resizeMode="cover"
      />

      <View style={styles.contentContainer}>
        <View style={styles.contenaireImg}>
          <Animated.Image
            entering={FadeInUp.delay(200).duration(1000).springify().damping(5)}
            style={styles.imgTOP1}
            source={require("../../assets/images/light.png")}
            resizeMode="contain"
          />
          <Animated.Image
            entering={FadeInUp.delay(400).duration(1000).springify().damping(5)}
            style={styles.imgTOP2}
            source={require("../../assets/images/light.png")}
            resizeMode="contain"
          />
        </View>

        <Animated.View style={styles.contenaireForm}>
          <View
            style={[
              styles.contenaireLOGIN,
              { marginTop: -50, marginBottom: 70 },
            ]}
          >
            <TouchableOpacity
              style={[styles.loginICON, { backgroundColor: "#3b5998" }]}
            >
              <Icon name="user-secret" size={45} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.welcomeText}>Welcome My Bro</Text>
          </View>

          <Animated.View
            entering={FadeInDown.duration(700).springify()}
            style={styles.inputContainer}
          >
            <TextInput
              label="Id To Login"
              value={formData.idCombi}
              onChangeText={(value) => handleInputChange("idCombi", value)}
              style={[styles.input]}
              mode="outlined"
              left={<TextInput.Icon icon="key" />}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(700).springify()}
            style={styles.inputContainer}
          >
            <TextInput
              label="Phone Number"
              value={formData.phoneNumber}
              onChangeText={(value) => handleInputChange("phoneNumber", value)}
              style={styles.input}
              mode="outlined"
              left={<TextInput.Icon icon="phone" />}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            style={styles.inputContainer}
          >
            <TextInput
              label="Password"
              value={formData.password}
              onChangeText={(value) => handleInputChange("password", value)}
              secureTextEntry={secureTextEntry}
              style={[styles.input, { marginBottom: 10 }]}
              mode="outlined"
              left={<TextInput.Icon icon="lock" />}
              right={
                <TextInput.Icon
                  icon="eye"
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              }
            />
          </Animated.View>

          <View style={styles.connectWithContainer}>
            <View style={styles.horizontalLine} />
            <Text style={styles.connectWithText}>Connect with</Text>
            <View style={styles.horizontalLine} />
          </View>

          <Animated.View
            entering={FadeInDown.duration(700).springify()}
            style={styles.socialIconsContainer}
          >
            <TouchableOpacity
              style={[styles.socialButton, { backgroundColor: "#db4437" }]}
            >
              <Icon name="google" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.socialButton, { backgroundColor: "#3b5998" }]}
            >
              <Icon name="facebook" size={20} color="#fff" />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(700).springify()}>
            <Text variant="labelSmall" style={styles.errorText}>
              {errorAf === "isCorrect" ? (
                <ActivityIndicator animating={true} color={normal.primary} />
              ) : (
                errorAf
              )}
            </Text>
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(700).springify()}>
            <Button
              icon={() => <Icon name="sign-in" size={20} color="white" />}
              mode="contained"
              onPress={handleConnexion}
              style={styles.button}
            >
              Login
            </Button>
          </Animated.View>
          <Text>
            Don't have an account?
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ color: "green" }}> SignUp</Text>
            </TouchableOpacity>
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBG: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-around",
    width: "100%",
  },
  contenaireImg: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imgTOP1: {
    height: 130,
  },
  imgTOP2: {
    height: 100,
  },
  contenaireForm: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 140,
  },
  contenaireLOGIN: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginICON: {
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
  },
  welcomeText: {
    marginTop: 1,
    fontSize: 25,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 1,
    width: "90%",
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 0,
  },
  button: {
    marginTop: 10,
    width: 300,
    backgroundColor: "#007bff",
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%",
    marginTop: 0,
  },
  socialButton: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 47,
    height: 47,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 5,
  },
  connectWithContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  horizontalLine: {
    flex: 1,
    height: 2,
    backgroundColor: "#d3d3d3",
  },
  connectWithText: {
    color: "#888",
    marginBottom: 6,
  },
  errorText: {
    color: normal.errr,
    textAlign: "center",
  },
});

export default LoginIn;
