import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import timeline from "../timeline";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{}} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Login" component={Login} />
      <Screen name="timeline" component={timeline} />
    </Navigator>
  );
};

export default RootNavigator;
