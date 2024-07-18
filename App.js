// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar} from "react-native";

import MyDrawer from "./Navigation";

function Dashboard() {
  return (
    <>
  <MyDrawer/>
   </>
  );
}

function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Index" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Router />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
