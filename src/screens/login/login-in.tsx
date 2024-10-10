import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationPropsLoginIn } from "../../types/types";

const LoginIn: React.FC = () => {
  const navigation = useNavigation<NavigationPropsLoginIn>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

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
            entering={FadeInUp.delay(200).duration(1000).springify().damping(0)}
            style={styles.imgTOP1}
            source={require("../../assets/images/light.png")}
            resizeMode="contain"
          />
          <Animated.Image
            entering={FadeInUp.delay(400).duration(1000).springify().damping(0)}
            style={styles.imgTOP2}
            source={require("../../assets/images/light.png")}
            resizeMode="contain"
          />
        </View>

        <Animated.View style={styles.contenaireForm}>
          <View style={[styles.contenaireLOGIN, { marginTop: -30, marginBottom: 50 }]}>
            <TouchableOpacity style={[styles.loginICON, { backgroundColor: "#3b5998" }]}>
              <Icon name="user" size={48} color="#fff" />
            </TouchableOpacity>
          </View>

          <Animated.View entering={FadeInDown.duration(700).springify()} style={styles.inputContainer}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              mode="outlined"
              left={<TextInput.Icon icon="gmail" />}
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(1000).springify()} style={styles.inputContainer}>
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureTextEntry}
              style={[styles.input, { marginBottom: 10 }]}
              mode="outlined"
              left={<TextInput.Icon icon="lock" />}
              right={<TextInput.Icon icon="eye" />}
            />
          </Animated.View>

          <View style={styles.connectWithContainer}>
            <View style={styles.horizontalLine} />
            <Text style={styles.connectWithText}>Connect with</Text>
            <View style={styles.horizontalLine} />
          </View>

          <Animated.View entering={FadeInDown.duration(700).springify()} style={styles.socialIconsContainer}>
            <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#db4437" }]}>
              <Icon name="google" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#3b5998" }]}>
              <Icon name="facebook" size={20} color="#fff" />
            </TouchableOpacity>
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(700).springify()}>
            <Button
              icon={() => <Icon name="sign-in" size={20} color="white" />}
              mode="contained"
              onPress={() => console.log("Login Pressed")}
              style={styles.button}
            >
              Login
            </Button>
          </Animated.View>
          <Text>
            Don't have an account?
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
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
      flex: 1,
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
      marginBottom: 120,
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
      marginTop: 20,
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
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      width: 47,
      height: 47,
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
      color: "#888",
      marginBottom: 6,
    },
  });
  
  export default LoginIn;

