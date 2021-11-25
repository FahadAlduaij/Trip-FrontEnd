import React from "react";
import { View, Image } from "react-native";
import { Pressable } from "native-base";

const SearchIcon = ({ navigation, focused }) => {
	return (
		<View
			style={{
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Pressable onPress={() => navigation.navigate("Search")}>
				<Image
					source={require("../../images/icons/Explor.png")}
					resizeMode="contain"
					style={{
						width: 30,
						height: 30,
						tintColor: focused ? "#154c79" : "#748c94",
					}}
				/>
			</Pressable>
		</View>
	);
};

export default SearchIcon;
