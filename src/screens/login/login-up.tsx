import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button, Dialog, Portal } from "react-native-paper";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  DataUser,
  NavigationPropsDrawerNavigator,
  NavigationPropsRegister,
} from "../../types/types";
import { useNavigation } from "@react-navigation/native";
import { normal } from "../../constants/color";
import { Text } from "react-native-paper";
import { VerifiedLoginUp } from "../../types/functions";
import { ActivityIndicator } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register: React.FC = () => {
  const navigation = useNavigation<
    NavigationPropsRegister | NavigationPropsDrawerNavigator>();
  // État global pour tous les champs
  const [formData, setFormData] = useState<DataUser>({
    name: "ulrich",
    secondName: "auriol",
    phoneNumber: "629213408",
    password: "12j",
    confirmPassword: "12j",
  });

  const [errors, setErrors] = useState({
    name: false,
    secondName: false,
    phoneNumber: false,
    password: false,
    confirmPassword: false,
  });

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntry2, setSecureTextEntry2] = useState(true);

  // Fonction pour gérer les changements dans les champs
  const handleChange = (field: string | number, value: string | number) => {
    setFormData({ ...formData, [field]: value });
  };

  // Validation simple des champs
  const validateField = (field: string, value: string) => {
    setErrors({ ...errors, [field]: value === "" });
  };

  /*-----------Gestion du Formulaire---------------------*/
  const [errorAf, setErrorAf] = useState<string>(""); //aff ero register
  const [visible, setVisible] = React.useState(false); //visible modal

  const hideDialog = () => {
    //visibilité de lamodal
    setVisible(false);
    setErrorAf("");
  };

  //creation du compte dans le storage
  const confirmRegister = async () => {
    setVisible(false);
    try {
      const jsonUsersCombi = JSON.stringify(formData);
      await AsyncStorage.setItem("user-combi", jsonUsersCombi);

      // Récupère et affiche les données stockées
      const jsonValue = await AsyncStorage.getItem("user-combi");
      if (jsonValue != null) {
        const parsedValue = JSON.parse(jsonValue);
        console.log(
          "Données enregistrées dans le local storage :",
          parsedValue
        );
      } else {
        console.log("Aucune donnée trouvée dans le local storage");
      }
    } catch (e: any) {
      setErrorAf("An error occurred while saving");
      console.error("Error saving to storage", e.message);
    }

    navigation.reset({
      index: 0,
      routes: [{ name: "DrawerNavigator" }],
    });
  };

  const handleFormSubmit = () => {
    const { name, secondName, phoneNumber, password, confirmPassword } =
      formData;
    const ValidationError = VerifiedLoginUp({
      name,
      secondName,
      phoneNumber,
      password,
      confirmPassword,
    });
    if (ValidationError) {
      setErrorAf(ValidationError);
    } else {
      setErrorAf("isCorrect");
      setTimeout(() => {
        setVisible(true);
      }, 3000);
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
            entering={FadeInUp.delay(200).duration(1000).springify().damping(4)}
            style={styles.imgTOP1}
            source={require("../../assets/images/light.png")}
            resizeMode="contain"
          />
          <Animated.Image
            entering={FadeInUp.delay(400).duration(1000).springify().damping(4)}
            style={styles.imgTOP2}
            source={require("../../assets/images/light.png")}
            resizeMode="contain"
          />
        </View>

        <Animated.View style={styles.contenaireForm}>
          <View style={[styles.contenaireLOGIN, { marginTop: -30 }]}>
            <TouchableOpacity
              style={[styles.loginICON, { backgroundColor: "#3b5998" }]}
            >
              <Icon name="user-circle-o" size={38} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Nom */}
          <Animated.View
            entering={FadeInDown.duration(700).springify()}
            style={styles.inputContainer}
          >
            <TextInput
              label="Name"
              value={formData.name}
              onChangeText={(value) => handleChange("name", value)}
              onBlur={() => validateField("name", formData.name)}
              style={styles.input}
              mode="outlined"
              error={errors.name}
              left={<TextInput.Icon icon="account" />}
            />
          </Animated.View>

          {/* Second Nom */}
          <Animated.View
            entering={FadeInDown.duration(700).springify()}
            style={styles.inputContainer}
          >
            <TextInput
              label="Second Name"
              value={formData.secondName}
              onChangeText={(value) => handleChange("secondName", value)}
              onBlur={() => validateField("secondName", formData.secondName)}
              style={styles.input}
              mode="outlined"
              error={errors.secondName}
              left={<TextInput.Icon icon="account-outline" />}
            />
          </Animated.View>

          {/* Numéro de téléphone */}
          <Animated.View
            entering={FadeInDown.duration(700).springify()}
            style={styles.inputContainer}
          >
            <TextInput
              label="Phone Number"
              value={formData.phoneNumber}
              onChangeText={(value) => handleChange("phoneNumber", value)}
              onBlur={() => validateField("phoneNumber", formData.phoneNumber)}
              style={styles.input}
              mode="outlined"
              error={errors.phoneNumber}
              keyboardType="numeric"
              left={<TextInput.Icon icon="phone" />}
              maxLength={9}
            />
          </Animated.View>

          {/* Mot de passe */}
          <Animated.View
            entering={FadeInDown.duration(700).springify()}
            style={styles.inputContainer}
          >
            <TextInput
              label="Password"
              value={formData.password}
              onChangeText={(value) => handleChange("password", value)}
              onBlur={() => validateField("password", formData.password)}
              secureTextEntry={secureTextEntry}
              style={styles.input}
              mode="outlined"
              error={errors.password}
              left={<TextInput.Icon icon="lock" />}
              right={
                <TextInput.Icon
                  icon="eye"
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              }
            />
          </Animated.View>

          {/* Confirmation du mot de passe */}
          <Animated.View
            entering={FadeInDown.duration(700).springify()}
            style={styles.inputContainer}
          >
            <TextInput
              label="Confirm Password"
              value={formData.confirmPassword}
              onChangeText={(value) => handleChange("confirmPassword", value)}
              onBlur={() =>
                validateField("confirmPassword", formData.confirmPassword)
              }
              secureTextEntry={secureTextEntry2}
              style={styles.input}
              mode="outlined"
              error={errors.confirmPassword}
              left={<TextInput.Icon icon="lock" />}
              right={
                <TextInput.Icon
                  icon="eye"
                  onPress={() => setSecureTextEntry2(!secureTextEntry2)}
                />
              }
            />
          </Animated.View>
          <View style={styles.connectWithContainer}>
            <View style={styles.horizontalLine} />
            <Text style={styles.connectWithText}>Create Account with</Text>
            <View style={styles.horizontalLine} />
          </View>

          {/* Social Login Buttons */}
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
              {errorAf == "isCorrect" ? (
                <ActivityIndicator animating={true} color={normal.primary} />
              ) : (
                errorAf
              )}
            </Text>
          </Animated.View>
          {/* Bouton Créer un compte */}
          <Button
            icon={() => <Icon name="user-plus" size={20} color="white" />}
            mode="contained"
            onPress={handleFormSubmit}
            style={styles.button}
          >
            Create Account
          </Button>

          <Text>
            I have an account?
            <TouchableOpacity onPress={() => navigation.navigate("LoginIn")}>
              <Text style={{ color: normal.secondary, fontSize: 15 }}>
                {" "}
                SignIn
              </Text>
            </TouchableOpacity>
            {/* ModalConfirmation */}
            <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Icon icon="account-check" size={50} />
                <Dialog.Title style={styles.title}>
                  Do you want to save this data?
                </Dialog.Title>

                <Dialog.Content>
                  <View style={styles.contenaireData}>
                    <Text variant="bodyMedium" style={styles.labelText}>
                      Name:
                    </Text>
                    <Text style={styles.dataText}>{formData.name}</Text>
                  </View>
                  <View style={styles.contenaireData}>
                    <Text variant="bodyMedium" style={styles.labelText}>
                      Second Name:
                    </Text>
                    <Text style={styles.dataText}>{formData.secondName}</Text>
                  </View>
                  <View style={styles.contenaireData}>
                    <Text variant="bodyMedium" style={styles.labelText}>
                      Phone Number:
                    </Text>
                    <Text style={styles.dataText}>{formData.phoneNumber}</Text>
                  </View>
                  <View style={styles.contenaireData}>
                    <Text variant="bodyMedium" style={styles.labelText}>
                      Password:
                    </Text>
                    <Text style={styles.dataText}>{formData.password}</Text>
                  </View>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={() => hideDialog()}>Cancel</Button>
                  <Button onPress={confirmRegister}>Save</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
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
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: -180,
  },
  contentContainer: {
    flex: 1,
    width: "100%",
  },
  contenaireImg: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imgTOP1: {
    height: 70,
  },
  imgTOP2: {
    height: 90,
  },
  contenaireForm: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
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
    width: 60,
    height: 60,
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
    marginBottom: 8,
  },
  button: {
    marginTop: 3,
    width: 300,
    backgroundColor: normal.primary,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%",
    marginTop: 5,
  },
  socialButton: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
  },

  connectWithContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#d3d3d3",
  },
  connectWithText: {
    color: normal.sousText,
    marginBottom: 0,
  },
  errorText: {
    color: normal.errr,
    textAlign: "center",
    margin: 3,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
  },
  contenaireData: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 0,
  },
  labelText: {
    fontSize: 16,
  },
  dataText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Register;
