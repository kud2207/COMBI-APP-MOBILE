import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import LoginIn from "./src/screens/login/login-in";
import Register from "./src/screens/login/login-up";
import DrawerNavigator from "./src/screens/home/drawer-navigator";
import {
  SQLiteProvider,
} from "expo-sqlite";
import { initializeDatabase } from "./src/sql/sqlite";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
        <SQLiteProvider databaseName="monCombi" onInit={initializeDatabase}>

    <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoginIn"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="LoginIn" component={LoginIn} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
            </SQLiteProvider>
  );
}
