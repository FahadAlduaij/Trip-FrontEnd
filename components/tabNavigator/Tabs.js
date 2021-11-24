import React from "react";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import { Box, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/core";

// Components
import Home from "../Home/index";
import UserProfileMain from "../screens/UserProfileMain";
import Search from "../screens/Search";
import timeline from "../screens/timeline";
import TripModal from "../Trips/TripModal";

// Stores
import tripStore from "../../stores/tripStore";

const Tab = createBottomTabNavigator();
// const CustomTabBarButton = () => {
// 	return (
// 		<TouchableOpacity
// 			style={{
// 				top: -30,
// 				justifyContent: "center",
// 				alignItems: "center",
// 				...styles.shadow,
// 			}}
// 		></TouchableOpacity>
// 	);
// };

const Tabs = ({ setShowModal, navigation }) => {
	return (
		<Tab.Navigator
			initialRouteName={"timeline"}
			screenOptions={{
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: {
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					position: "absolute",
					elevation: 0,
					backgroundColor: "#d4d4d4",
					height: 70,
					...styles.shadow,
				},
			}}
		>
			<Tab.Screen
				name="timeline"
				component={timeline}
				options={{
					tabBarIcon: ({ focused }) => (
						<Pressable onPress={() => navigation.navigate("timeline")}>
							<View
								style={{
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Image
									source={require("../images/icons/Timelinee.png")}
									resizeMode="contain"
									style={{
										width: 30,
										height: 30,
										tintColor: focused ? "#0891b2" : "#748c94",
									}}
								/>
								{/* <Text
									style={{
										color: focused ? "#0891b2" : "#748c94",
										fontSize: 12,
									}}
								>
									Timeline
								</Text> */}
							</View>
						</Pressable>
					),
				}}
			/>

			<Tab.Screen
				name="Search"
				component={Search}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Pressable onPress={() => navigation.navigate("Search")}>
								<Image
									source={require("../images/icons/Explor.png")}
									resizeMode="contain"
									style={{
										width: 30,
										height: 30,
										tintColor: focused ? "#0891b2" : "#748c94",
									}}
								/>
								{/* <Text
									style={{
										color: focused ? "#0891b2" : "#748c94",
										fontSize: 12,
									}}
								>
									Explore
								</Text> */}
							</Pressable>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Modal"
				component={TripModal}
				options={{
					tabBarButton: (props) => (
						<Pressable onPress={() => tripStore.openModal()}>
							<View
								style={{
									width: 60,
									height: 60,
									borderRadius: 35,
									marginTop: 5,
									backgroundColor: "#0891b2",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Image
									source={require("../images/icons/plus.png")}
									resizeMode="center"
									style={{
										width: 40,
										height: 40,
										tintColor: "#fff",
									}}
								/>
							</View>
						</Pressable>
					),
				}}
			/>
			<Tab.Screen
				name="Chat"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Image
								source={require("../images/icons/Chat.png")}
								resizeMode="contain"
								style={{
									width: 30,
									height: 30,
									tintColor: focused ? "#0891b2" : "#748c94",
								}}
							/>
							{/* <Text
								style={{ color: focused ? "#0891b2" : "#748c94", fontSize: 12 }}
							>
								Chattttt
							</Text> */}
						</View>
					),
				}}
			/>

			<Tab.Screen
				name="UserProfileMain"
				component={UserProfileMain}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Pressable onPress={() => navigation.navigate("UserProfileMain")}>
								<Image
									source={require("../images/icons/profile.png")}
									resizeMode="contain"
									style={{
										width: 30,
										height: 30,
										tintColor: focused ? "#0891b2" : "#748c94",
										marginLeft: 3,
									}}
								/>
								{/* <Text
									style={{
										color: focused ? "#0891b2" : "#748c94",
										fontSize: 12,
									}}
								>
									Profile
								</Text> */}
							</Pressable>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
};
export default Tabs;

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#242424",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
	},
});
