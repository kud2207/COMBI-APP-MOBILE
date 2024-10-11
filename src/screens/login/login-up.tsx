import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from 'react-native-paper';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { NavigationPropsRegister } from "../../types/types";
import { useNavigation } from "@react-navigation/native";

const Register: React.FC = () => {
    const navigation = useNavigation<NavigationPropsRegister>();
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true); 
  const [secureTextEntry2, setSecureTextEntry2] = useState(true);

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
          <View style={[styles.contenaireLOGIN, {marginTop: -30}]}>
            <TouchableOpacity style={[styles.loginICON, { backgroundColor: '#3b5998' }]}>
              <Icon name="user-circle-o" size={38} color="#fff" />
            </TouchableOpacity>
          </View>
          <Animated.View entering={FadeInDown.duration(700).springify()} style={styles.inputContainer}>
            <TextInput
              label="Name"
              value={name}
              onChangeText={setName}
              style={styles.input}
              mode="outlined"
              left={<TextInput.Icon icon="account" />}
            />
          </Animated.View>

          {/* Second Name Input */}
          <Animated.View entering={FadeInDown.duration(700).springify()} style={styles.inputContainer}>
            <TextInput
              label="Second Name"
              value={secondName}
              onChangeText={setSecondName}
              style={styles.input}
              mode="outlined"
              left={<TextInput.Icon icon="account-outline" />}
            />
          </Animated.View>

         
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

          <Animated.View entering={FadeInDown.duration(700).springify()} style={styles.inputContainer}>
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureTextEntry}
              style={[styles.input, {marginBottom: 10}]}
              mode="outlined"
              left={<TextInput.Icon icon="lock" />} 
              right={<TextInput.Icon icon="eye" onPress={() => setSecureTextEntry(!secureTextEntry)} />} 
            />
          </Animated.View>

          {/* Confirm Password Input */}
          <Animated.View entering={FadeInDown.duration(700).springify()} style={styles.inputContainer}>
            <TextInput
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={secureTextEntry2}
              style={styles.input}
              mode="outlined"
              left={<TextInput.Icon icon="lock" />} 
              right={<TextInput.Icon icon="eye" onPress={() => setSecureTextEntry2(!secureTextEntry2)} />} 
            />
          </Animated.View>

          <View style={styles.connectWithContainer}>
            <View style={styles.horizontalLine} />
            <Text style={styles.connectWithText}>Create Account with</Text>
            <View style={styles.horizontalLine} />
          </View>

          {/* Social Login Buttons */}
          <Animated.View entering={FadeInDown.duration(700).springify()} style={styles.socialIconsContainer}>
            <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#db4437' }]}>
              <Icon name="google" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]}>
              <Icon name="facebook" size={20} color="#fff" />
            </TouchableOpacity>
          </Animated.View>

          {/* Create Account Button */}
          <Button
            icon={() => <Icon name="user-plus" size={20} color="white" />}
            mode="contained"
            onPress={() => console.log("Create Account Pressed")}
            style={styles.button}
          >
            Create Account
          </Button>
          <Text>
            I have a  account?
            <TouchableOpacity onPress={() => navigation.navigate('LoginIn')}>
              <Text style={{ color: "green" }}> SignIn</Text>
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
    justifyContent: 'center',  
    alignItems: 'center',      
  },
  imageBG: {
    flex: 1,
    width: "100%",
    height: '100%',
    position: "absolute",      
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    width: '100%',
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
    justifyContent: 'center',  
    alignItems: 'center',
    
  },
  contenaireLOGIN:{
    display:'flex',
    justifyContent: 'center',
    alignItems:'center'
  },
  loginICON: {
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
    width: '90%',
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10
  },
  button: {
    marginTop: 20,
    width: 300,
    backgroundColor: "#007bff",
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%',
    marginTop: 10,
  },
  socialButton: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 47,
    height: 47,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1
  },

  connectWithContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#d3d3d3',
  },
  connectWithText: {
    color: '#888',
    marginBottom: 0,
  },
});

export default Register;
