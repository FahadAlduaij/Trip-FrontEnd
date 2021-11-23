import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
// components
import Home from "../Home";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import timeline from "../screens/timeline";
import UserProfileMain from "../Profile/UserProfileMain";
import Search from "../screens/Search";
//stores
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import TripDetail from "../Trips/TripDetail";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName={"timeline"}>
      <Screen name="Home" component={Home} options={{}} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="timeline" component={timeline} />
      <Screen name="UserProfileMain" component={UserProfileMain} />
      <Screen name="Search" component={Search} />
      <Screen name="TripDetail" component={TripDetail} />
    </Navigator>
  );
};

export default observer(RootNavigator);
