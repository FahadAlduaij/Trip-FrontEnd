import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet } from "react-native";

// Components
import TripsList from "../Trips/TripsList";
import TripModal from "../Trips/TripModal";

const timeline = ({ navigation }) => {
	return (
		<SafeAreaView style={(styles.body, { backgroundColor: "#0f1010" })}>
			<TripsList navigation={navigation} />
			<TripModal />
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
