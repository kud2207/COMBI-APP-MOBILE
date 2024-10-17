import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const CustonBarButton = (props: any) => {
  const { route, children, accessibilityState, onPress } = props;
  if (accessibilityState.selected) {
    return (
      <View style={styles.btnWrapper}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[
              styles.svgGapFilter,
              { borderTopLeftRadius: route === "Home" ? 10 : 0 },
            ]}
          />

          <Svg width={70} height={50} viewBox="0 6 75 30">
            {/* viewBox='0 0 75 61' */}
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1 "
              fill={"#fff"}
            />
          </Svg>
          <View
            style={[
              styles.svgGapFilter,
              { borderTopRightRadius: route === "Settings" ? 10 : 0 },
            ]}
          />
        </View>

        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={[styles.activeBtn]}
        >
          <Text>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[
          styles.inactiveBtn,
          // {
          //   borderTopLeftRadius: route === "Home" ? 10 : 0,
          //   borderTopRightRadius: route === "Settings" ? 10 : 0,
          // },
        ]}
      >
        <Text>{children}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  btnWrapper: {
    flex: 1,
    alignItems: "center",
    
  },
  svgGapFilter: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
      borderTopRightRadius:30
  },
  activeBtn: {
    flex: 1,
    position: "absolute",
    top: -22,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 5,
  },
  inactiveBtn: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default CustonBarButton;
