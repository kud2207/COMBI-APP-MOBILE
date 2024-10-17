import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notif from "./notif";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import CustonBarButton from "../../components/home/CustonBarButton";
import { useNavigation } from "@react-navigation/native";
import { normal } from "../../constants/color";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: normal.primary,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ color, focused }) => {
          let iconName = "";
          if (route.name === "hbd") {
            iconName = focused ? "calendar-number" : "calendar-number-outline";
          } else if (route.name === "tache") {
            iconName = focused ? "duplicate" : "duplicate-outline";
          } else if (route.name === "map") {
            iconName = focused
              ? "location"
              : "location-outline";
          } else if (route.name === "people") {
            iconName = focused ? "people-circle" : "people-circle";
          }

          // Set a default icon name to avoid undefined error
          iconName = iconName || "alert-circle-outline";

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="hbd"
        component={Notif}
        options={{
          tabBarButton: (props) => <CustonBarButton {...props} />,
          tabBarLabel: " ",
        }}
      />
      <Tab.Screen
        name="tache"
        component={Notif}
        options={{
          tabBarButton: (props) => <CustonBarButton {...props} />,
          tabBarLabel: " ",
        }}
      />
      <Tab.Screen
        name="map"
        component={Notif}
        options={{
          tabBarButton: (props) => <CustonBarButton {...props} />,
          tabBarLabel: " ",
        }}
      />
      <Tab.Screen
        name="people"
        component={Notif}
        options={{
          tabBarButton: (props) => <CustonBarButton {...props} />,
          tabBarLabel: " ",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "transparent",
    position: "absolute",
    borderTopWidth: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
