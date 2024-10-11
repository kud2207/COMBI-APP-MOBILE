import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notif from "./notif";
import BottomTabNavigator from "./bottom-tab-navigator";


const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (

        <Stack.Navigator initialRouteName="LoginIn" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginIn" component={BottomTabNavigator} />
          {/* <Stack.Screen name="Register" component={Notif} /> */}
        </Stack.Navigator>

  );
}
