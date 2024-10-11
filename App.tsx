import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import LoginIn from "./src/screens/login/login-in";
import Register from "./src/screens/login/login-up";
import HomeStack from "./src/screens/home/home-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeStack" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginIn" component={LoginIn} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="HomeStack" component={HomeStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
