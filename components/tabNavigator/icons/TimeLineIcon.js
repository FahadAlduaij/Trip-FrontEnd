import React from "react";
import { View, Image } from "react-native";
import { Pressable } from "native-base";

const TimeLineIcon = ({ navigation, focused }) => {
	return (
		<Pressable onPress={() => navigation.navigate("timeline")}>
			<View
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Image
					source={require("../../images/icons/Timelinee.png")}
					resizeMode="contain"
					style={{
						width: 30,
						height: 30,
						tintColor: focused ? "#154c79" : "#748c94",
					}}
				/>
			</View>
		</Pressable>
	);
};

export default TimeLineIcon;
