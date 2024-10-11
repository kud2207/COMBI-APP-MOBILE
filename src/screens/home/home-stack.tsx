import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notif from "./notif";
import BottomTabNavigator from "./bottom-tab-navigator";
import DrawerNavigatorNutton from "./drawer-navigator-button";
import DrawerNavigator from "./drawer-navigator";


const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (

        <Stack.Navigator initialRouteName="LoginIn" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginIn" component={DrawerNavigator} />
          {/* <Stack.Screen name="Register" component={Notif} /> */}
        </Stack.Navigator>

  );
}
