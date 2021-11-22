import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import timeline from "../screens/timeline";
import UserProfileMain from "../Profile/UserProfileMain";
import Search from "../screens/Search";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="timeline">
      <Screen name="Home" component={Home} options={{}} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="timeline" component={timeline} />
      <Screen name="UserProfileMain" component={UserProfileMain} />
      <Screen name="Search" component={Search} />
    </Navigator>
  );
};

export default RootNavigator;
