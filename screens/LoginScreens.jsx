import { View, Text } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import Form from "../components/Auth/Login/form";

export default function LoginScreen() {
  const insert = useSafeAreaInsets();
  return (
    <>
      <View
        className="bg-white flex-1 items-center content-center"
        style={{ paddingTop: insert.top, paddingBottom: insert.bottom }}
      >
        {/* title + form */}
        <View className="bg-white h-full w-full flex justify-around pt-6 pb-6">
          <View className="flex items-center p-2">
            {/* title*/}
            <Text className="text-textPrincipal font-bold tracking-wider text-5xl">
              Hello
            </Text>
            <Text className="text-black tracking-wider text-xl">
              Inicia sesion con tu cuenta
            </Text>
          </View>
          {/* form*/}
          <Form />
        </View>
      </View>
    </>
  );
}
