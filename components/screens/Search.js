import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Tabs from "../tabNavigator/Tabs";

export default function Search() {
	return (
		<View
			style={{
				backgroundColor: "#0f1010",
				height: "100%",
				width: "100%",
				paddingTop: 40,
			}}
		>
			<View
				style={{
					padding: 10,
					backgroundColor: "#000",
					margin: 10,
					borderRadius: 30,
					borderWidth: 1,
					borderColor: "#000",
				}}
			>
				<TextInput
					placeholder="Search for Trips!"
					placeholderTextColor="#e7e7e7"
					style={{ fontSize: 15, color: "white", paddingHorizontal: 5 }}
				/>
			</View>
		</View>
	);
}
