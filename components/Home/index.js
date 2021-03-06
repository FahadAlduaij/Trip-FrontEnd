import React from "react";
import "react-native-gesture-handler";
import {
	Text,
	View,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	Image,
	ImageBackground,
} from "react-native";
import { Pressable } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.body}>
			<ImageBackground
				source={require("../images/cover.gif")}
				style={styles.image}
			>
				<View style={styles.container}>
					<Image source={require("../images/logo.png")} style={styles.logo} />
					<TouchableOpacity style={styles.button}>
						<Pressable
							onPress={() => {
								if (authStore.user) {
									navigation.navigate("Tabs");
								} else {
									navigation.navigate("Signin");
								}
							}}
						>
							<Text
								style={{
									color: "#ffff",
									alignSelf: "center",
									textAlignVertical: "auto",
									fontSize: 23,
									fontWeight: "bold",
								}}
							>
								Get started
							</Text>
						</Pressable>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
	container: {
		marginTop: 80,
		alignContent: "center",
		justifyContent: "center",
		alignSelf: "center",
		textAlign: "center",
	},
	button: {
		marginHorizontal: 20,
		marginTop: 300,
		textAlign: "center",
		margin: 5,
		color: "#171717",
		borderRadius: 10,
		height: 60,
		width: 350,
		padding: 15,
		backgroundColor: "#171717",
	},
	logo: {
		alignSelf: "center",
		height: 150,
		width: 130,
		marginTop: -40,
	},
	body: {
		flex: 1,
	},
});

export default Home;
