import React from "react";
import { View, Image } from "react-native";
import { Pressable } from "native-base";

const ProfileIcon = ({ navigation, focused }) => {
	return (
		<View
			style={{
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Pressable onPress={() => navigation.navigate("UserProfileMain")}>
				<Image
					source={require("../../images/icons/profile.png")}
					resizeMode="contain"
					style={{
						width: 30,
						height: 30,
						tintColor: focused ? "#0891b2" : "#748c94",

						marginLeft: 3,
					}}
				/>
			</Pressable>
		</View>
	);
};

export default ProfileIcon;
