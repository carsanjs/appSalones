import "react-native-gesture-handler"

import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreens() {
  const navigation = useNavigation();

  return (
    <View className="bg-red-600">
      <Text
        className="text-black"
        style={{
          fontSize: 30,
          marginTop: "20%",
          textAlign: "center",
        }}
      >
        Home
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Stacks")}
        style={{
          backgroundColor: "purple",
          padding: 20,
          marginTop: "30%",
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            color: "white",
          }}
        >
          GO to!
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={() => navigations.toggleDrawer()}
        style={{
          backgroundColor: "purple",
          padding: 20,
          marginTop: "30%",
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            color: "white",
          }}
        >
          drawer
        </Text>
      </TouchableOpacity>
    </View>
  );
}
