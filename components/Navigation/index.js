import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{}} />
    </Navigator>
  );
};

export default RootNavigator;
