import React from "react";
import { View, Image } from "react-native";

const ChatIcon = ({ navigation, focused }) => {
	return (
		<View
			style={{
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Image
				source={require("../../images/icons/Chat.png")}
				resizeMode="contain"
				style={{
					width: 30,
					height: 30,
					tintColor: focused ? "#154c79" : "#748c94",
				}}
			/>
		</View>
	);
};

export default ChatIcon;
