import React, { useState } from "react";
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
import { Center, Pressable } from "native-base";

// Components
import Tabs from "../tabNavigator/Tabs";
import TripsList from "../Trips/TripsList";
import TripModal from "../Trips/TripModal";

const timeline = ({ navigation }) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<SafeAreaView style={styles.body}>
			<ImageBackground
				source={require("../images/background.jpg")}
				style={styles.image}
			>
				<TripsList navigation={navigation} />
				<TripModal showModal={showModal} setShowModal={setShowModal} />

				<View style={{ marginTop: 40 }}>
					<Tabs setShowModal={setShowModal} />
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default timeline;

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
		marginTop: 500,
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
