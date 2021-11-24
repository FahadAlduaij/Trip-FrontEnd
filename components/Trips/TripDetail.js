import React from "react";
import { StyleSheet } from "react-native";
import {
	Text,
	View,
	Image,
	ScrollView,
	HStack,
	Center,
	useToast,
} from "native-base";
import { Button } from "react-native-elements";

// Stores
import { baseURL } from "../../stores/instance";
import tripStore from "../../stores/tripStore";
import EditTripModal from "./EditTripModal";

const TripDetail = ({ route, navigation }) => {
	const trip = route.params.trip;
	const toast = useToast();

	const handleDelete = () => {
		tripStore.deleteTrip(trip, toast, navigation);
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={{ alignItems: "center", marginHorizontal: 30 }}>
					<Image
						style={styles.tripImg}
						source={{ uri: baseURL + trip.image }}
						alt="trip image description"
					/>
					<Text style={styles.name}>{trip.title}</Text>

					<Text style={styles.description}>{trip.description}</Text>
				</View>
				<View style={styles.starContainer}>
					<Image
						style={styles.star}
						source={{
							uri: "https://img.icons8.com/color/40/000000/star.png",
						}}
						alt="Start 1"
					/>
					<Image
						style={styles.star}
						source={{
							uri: "https://img.icons8.com/color/40/000000/star.png",
						}}
						alt="Start 2"
					/>
					<Image
						style={styles.star}
						source={{
							uri: "https://img.icons8.com/color/40/000000/star.png",
						}}
						alt="Start 3"
					/>
					<Image
						style={styles.star}
						source={{
							uri: "https://img.icons8.com/color/40/000000/star.png",
						}}
						alt="Start 4"
					/>
					<Image
						style={styles.star}
						source={{
							uri: "https://img.icons8.com/color/40/000000/star.png",
						}}
						alt="Start 5"
					/>
				</View>
				<View style={styles.addToListContainer}>
					<Button
						title="Add to my trips list"
						buttonStyle={{
							backgroundColor: "#2f8ce3",
							alignItems: "center",
						}}
						containerStyle={{ width: "82%", marginTop: 10 }}
					/>
				</View>
				<Center>
					<HStack mt="5">
						<EditTripModal trip={trip} />

						<Button
							title="Delete"
							buttonStyle={{
								backgroundColor: "#dc2626",
								margin: 5,
								width: 100,
							}}
							onPress={handleDelete}
						/>
					</HStack>
				</Center>
			</ScrollView>
		</View>
	);
};

export default TripDetail;

const styles = StyleSheet.create({
	container: {
		paddingTop: 100,
		flex: 1,
		backgroundColor: "#0f1010",
	},
	tripImg: {
		width: 500,
		height: 300,
	},
	name: {
		fontSize: 20,
		color: "#696969",
		fontWeight: "bold",
		marginTop: 30,
		alignItems: "center",
	},
	description: {
		textAlign: "center",
		marginTop: 10,
		color: "#696969",
	},
	star: {
		width: 40,
		height: 40,
	},
	btnColor: {
		height: 30,
		width: 30,
		borderRadius: 30,
		marginHorizontal: 3,
	},
	btnSize: {
		height: 40,
		width: 40,
		borderRadius: 40,
		borderColor: "#778899",
		borderWidth: 1,
		marginHorizontal: 3,
		backgroundColor: "white",

		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	starContainer: {
		justifyContent: "center",
		marginHorizontal: 30,
		flexDirection: "row",
		marginTop: 20,
	},
	contentColors: {
		justifyContent: "center",
		marginHorizontal: 30,
		flexDirection: "row",
		marginTop: 20,
	},
	contentSize: {
		justifyContent: "center",
		marginHorizontal: 30,
		flexDirection: "row",
		marginTop: 20,
	},
	shareButton: {
		marginTop: 10,
		height: 45,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		backgroundColor: "#00BFFF",
	},
	shareButtonText: {
		color: "#FFFFFF",
		fontSize: 20,
	},
	addToListContainer: {
		marginHorizontal: 30,
		alignItems: "center",
	},
});
