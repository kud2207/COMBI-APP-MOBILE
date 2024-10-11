import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Notif from "./notif";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity } from "react-native";
import CustonBarButton from "../../components/home/CustonBarButton";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    const navigation = useNavigation()
  return (
    <Tab.Navigator
    
      screenOptions={(route) => ({
        headerShown: false,
        tabBarShowLabel: true,//.???
        tabBarActiveTintColor: "#b66d20",
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ color, size, focused }: any) => {
          let iconName;
          if (route.route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.route.name === "Notification") {
            iconName = focused
              ? "notifications-sharp"
              : "notifications-outline";
          } else if (route.route.name === "chate") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          }
          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    > 
      <Tab.Screen
        name="Home"
        component={Notif}
        options={{
          tabBarButton: (props) => <CustonBarButton  {...props} />,
          headerShown:true,
          tabBarLabel:" ",
          title:"chate",
          headerLeft:() =>{
            return(
                <TouchableOpacity  >
                    <Icon name="menu" size={30 } color={'#222'}  />
                </TouchableOpacity>
            )
          }
        }}
      />
      <Tab.Screen
       
        name="Settings"
        component={Notif}
        options={{
          tabBarButton: (props) => <CustonBarButton {...props} />,
          tabBarLabel:" ",
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notif}
        options={{
          tabBarButton: (props) => <CustonBarButton {...props} />,
          tabBarLabel:" ",
        }}
      />
      <Tab.Screen
        name="chate"
        component={Notif}
        options={{
          tabBarButton: (props) => <CustonBarButton {...props} />,
          tabBarLabel:" ",

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
    bottom: 15,
    right: 10,
    left: 10,

  },
});
