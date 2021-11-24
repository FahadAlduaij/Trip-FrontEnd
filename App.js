import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation/index";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <RootNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
