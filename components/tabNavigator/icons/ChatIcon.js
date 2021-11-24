import React from "react";
import { Text, View, Image } from "react-native";
import { Pressable } from "native-base";

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
					tintColor: focused ? "#0891b2" : "#748c94",
				}}
			/>
			{/* <Text
            style={{ color: focused ? "#0891b2" : "#748c94", fontSize: 12 }}
        >
            Chattttt
        </Text> */}
		</View>
	);
};

export default ChatIcon;
