import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CathegorieTache() {
  return (
    <View style={styles.contenair}>
      <Text style={styles.category}>Category</Text>
      <View style={styles.contenair1}>
        <Icon name="heartbeat" size={30} color="white" style={styles.iconTop} />
        <Text style={styles.textCategory}>Edication</Text>
        <View style={styles.taskCountContainer}>
          <Icon name="tasks" size={20} color="white" />
          <Text style={styles.taskCountText}>8 Tasks</Text>
        </View>
        <TouchableOpacity style={styles.viewMoreButton}>
          <Icon name="eye" color="white" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenair: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  category: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    marginBottom: 4,
  },
  contenair1: {
    width: 130,
    backgroundColor: "#f1948a",
    borderRadius: 15,
    padding: 15,
    justifyContent: "space-between",
  },
  textCategory: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 0,
  },
  iconTop: {
    marginBottom: 5,
  },
  taskCountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskCountText: {
    color: "white",
    marginLeft: 10,
  },
  viewMoreButton: {
    marginTop: 5,
      alignSelf: "flex-end"
  },
});
