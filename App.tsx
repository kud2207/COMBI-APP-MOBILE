import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import LoginIn from "./src/screens/login/login-in";
import Register from "./src/screens/login/login-up";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginIn" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginIn" component={LoginIn} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
