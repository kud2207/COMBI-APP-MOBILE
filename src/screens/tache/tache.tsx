import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import RenderTache from "../../components/taches/render-tache";
import CathegorieTache from "../../components/taches/cathegorie-tache";
import SearchBarTache from "../../components/taches/search-bar";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the icon library
import { useNavigation } from "@react-navigation/native";
import { NavigationPropsAddTache } from "../../types/types";

export default function Tache() {
  const bgBleu = require("../../assets/images/bgBleu1.jpg");
  const navigation = useNavigation<NavigationPropsAddTache>();
  const goddTask = () => {
    navigation.replace("addTache");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgBleu}
        resizeMode="cover"
        style={styles.imageBG}
      >
        <View style={styles.container1}>
          <View style={styles.flex1}>
            <SearchBarTache />
          </View>
          <View style={styles.flex2}>
            <CathegorieTache />
          </View>
          <View style={styles.flex3}>
            <RenderTache />
            
          </View>
        </View>

        {/* Add Button with Icon */}
        <TouchableOpacity style={styles.addButton} onPress={goddTask}>
          <Icon name="plus" size={24} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBG: {
    flex: 1,
  },
  container1: {
    flex: 1,
  },
  flex1: {
    flex: 1,
    zIndex:20
  },
  flex2: {
    flex: 3,
  },
  flex3: {
    flex: 4,
  },
  addButton: {
    position: "absolute",
    bottom: 60,
    right: 10,
    backgroundColor: "#3498db",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },
});
