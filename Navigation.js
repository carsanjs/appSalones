import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import HomeScreens from "./screens/navigation/HomeScreens";
import StacksScreens from "./screens/navigation/StackScreens";
import SettingScreens from "./screens/navigation/SettingsScreens";


function MyStack() {
  const HomeStackNavigator = createNativeStackNavigator();
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreens">
      <HomeStackNavigator.Screen name="HomeScreens" component={HomeScreens} />
      <HomeStackNavigator.Screen name="Stacks" component={StacksScreens} />
    </HomeStackNavigator.Navigator>
  );
}


function MyTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#3111F3",
        // tabBarLabelStyle: { fontSize: 16 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          headerShown: false,
          title: "ni Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="house" size={25} color={color} />
          ),
          tabBarBadge: 4,
        }}
      />
      <Tab.Screen
        name="Classroom"
        options={{
          headerShown: false,
          title: "mis classroom",
          tabBarLabel: "Classroom",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="google-classroom"
              size={24}
              color={color}
            />
          ),
        }}
        component={StacksScreens}
      />
      <Tab.Screen
        name="Teacher"
        options={{
          headerShown: false,
          title: "mis teacher",
          tabBarLabel: "Teacher",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-plus" size={24} color={color} />
          ),
        }}
        component={SettingScreens}
      />
    </Tab.Navigator>
  );
}

export default function MyDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
    >
      <Drawer.Screen 
      options={{
        drawerIcon: ({ color }) => (
          <FontAwesome6 name="house" size={25} color={color} />
        )
      }}
      name="MyTab" 
      component={MyTab} />
      <Drawer.Screen 
      options={{
        drawerIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="google-classroom"
            size={24}
            color={color}
          />
        ),
      }}
      name="StacksScreens" component={StacksScreens} />
      <Drawer.Screen 
       options={{
        drawerIcon: ({ color }) => (
          <FontAwesome5 name="user-plus" size={24} color={color} />
        ),
      }}
      name="SettingScreens" component={SettingScreens} />
      {/* <Drawer.Screen name="UserDoc" component={Userdoc} /> */}
    </Drawer.Navigator>
  );
}
