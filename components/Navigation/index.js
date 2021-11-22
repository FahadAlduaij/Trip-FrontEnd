import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import timeline from "../screens/timeline";
import UserProfileMain from "../Profile/UserProfileMain";
import Search from "../screens/Search";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react-lite";

const RootNavigator = () => {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<Navigator initialRouteName={authStore.user ? "timeline" : "Home"}>
			<Screen name="Home" component={Home} options={{}} />
			<Screen name="Signin" component={Signin} />
			<Screen name="Signup" component={Signup} />
			<Screen name="timeline" component={timeline} />
			<Screen name="UserProfileMain" component={UserProfileMain} />
			<Screen name="Search" component={Search} />
		</Navigator>
	);
};

export default observer(RootNavigator);
