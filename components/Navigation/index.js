import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import timeline from "../timeline";
import UserProfileMain from "../Profile/UserProfileMain";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{}} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="timeline" component={timeline} />
      <Screen name="UserProfileMain" component={UserProfileMain} />
    </Navigator>
  );
};

export default RootNavigator;
