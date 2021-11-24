import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

// components
import Home from "../Home";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import Tabs from "../tabNavigator/Tabs";
import TripDetail from "../Trips/TripDetail";
import ProfilePage from "../Profile/ProfilePage";

//stores

const RootNavigator = () => {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<Navigator initialRouteName={"Home"}>
			{/* Screen for Logged in Users */}
			<Screen
				name="Tabs"
				component={Tabs}
				options={{
					headerShown: false,
				}}
			/>
			<Screen
				name="TripDetail"
				component={TripDetail}
				options={{
					headerShown: false,
				}}
			/>

			<Screen
				name="ProfilePage"
				component={ProfilePage}
				options={{
					headerShown: false,
				}}
			/>

			{/* Auth Screen */}
			<Screen name="Home" component={Home} options={{}} />
			<Screen
				name="Signin"
				component={Signin}
				options={{
					headerShown: false,
				}}
			/>
			<Screen
				name="Signup"
				component={Signup}
				options={{
					headerShown: false,
				}}
			/>
		</Navigator>
	);
};

export default observer(RootNavigator);
