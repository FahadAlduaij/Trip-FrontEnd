import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import { Box, Pressable } from "native-base";
import Home from "../Home/index";
import UserProfileMain from "../Profile/UserProfileMain";
import Search from "../screens/Search";
import { useNavigation } from "@react-navigation/core";

const Tab = createBottomTabNavigator();
const CustomTabBarButton = () => {
	return (
		<TouchableOpacity
			style={{
				top: -30,
				justifyContent: "center",
				alignItems: "center",
				...styles.shadow,
			}}

			// onPress={onPress}
		></TouchableOpacity>
	);
};

const Tabs = ({ setShowModal }) => {
	const navigation = useNavigation();
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: {
					position: "absolute",
					bottom: 25,
					left: 20,
					right: 20,
					elevation: 0,
					backgroundColor: "black",
					borderRadius: 15,
					height: 90,
					...styles.shadow,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								top: 10,
							}}
						>
							<Pressable onPress={() => navigation.navigate("timeline")}>
								<Image
									source={require("../images/icons/Timelinee.png")}
									resizeMode="contain"
									style={{
										width: 30,
										height: 30,
										tintColor: focused ? "#00d0ff" : "#748c94",
										marginLeft: 8,
									}}
								/>
								<Text
									style={{
										color: focused ? "#00d0ff" : "#748c94",
										fontSize: 12,
									}}
								>
									Timeline
								</Text>
							</Pressable>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Explor"
				component={Search}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								top: 10,
							}}
						>
							<Pressable onPress={() => navigation.navigate("Search")}>
								<Image
									source={require("../images/icons/Explor.png")}
									resizeMode="contain"
									style={{
										width: 30,
										height: 30,
										tintColor: focused ? "#00d0ff" : "#748c94",
									}}
								/>
								<Text
									style={{
										color: focused ? "#00d0ff" : "#748c94",
										fontSize: 12,
									}}
								>
									Explore
								</Text>
							</Pressable>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Post"
				component={Home}
				options={{
					tabBarButton: (props) => (
						<Pressable onPress={() => setShowModal(true)}>
							<View
								style={{
									width: 70,
									height: 70,
									borderRadius: 35,
									marginTop: 10,
									backgroundColor: "#2f8ce3",
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
								top: 10,
							}}
						>
							<Image
								source={require("../images/icons/Chat.png")}
								resizeMode="contain"
								style={{
									width: 30,
									height: 30,
									tintColor: focused ? "#00d0ff" : "#748c94",
								}}
							/>
							<Text
								style={{ color: focused ? "#00d0ff" : "#748c94", fontSize: 12 }}
							>
								Chat
							</Text>
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
								top: 10,
							}}
						>
							<Pressable onPress={() => navigation.navigate("UserProfileMain")}>
								<Image
									source={require("../images/icons/profile.png")}
									resizeMode="contain"
									style={{
										width: 30,
										height: 30,
										tintColor: focused ? "#00d0ff" : "#748c94",
										marginLeft: 3,
									}}
								/>
								<Text
									style={{
										color: focused ? "#00d0ff" : "#748c94",
										fontSize: 12,
									}}
								>
									Profile
								</Text>
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
