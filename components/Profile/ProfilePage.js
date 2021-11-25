import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { Divider } from "react-native-elements/dist/divider/Divider";

// Components
import TripItem from "../Profile/TripItem";

// Stores
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";
import { baseURL } from "../../stores/instance";

const ProfilePage = ({ route, navigation }) => {
	const [follow, setFollow] = useState("Follow");

	const { trip } = route.params;

	const user = trip.owner;

	const trips = tripStore.trips
		.filter((trip) => trip.owner._id === user._id)
		.map((_trip) => (
			<TripItem trip={_trip} key={_trip._id} navigation={navigation} />
		));

	const handleFollow = () => {
		if (follow === "Follow") {
			setFollow("UnFollow");
		} else {
			setFollow("Follow");
		}
	};

	return (
		<ScrollView style={{ backgroundColor: "#0f1010", paddingTop: 35 }}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
					marginTop: 5,
					backgroundColor: "#0f1010",
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						width: "25%",
						paddingLeft: 10,
						backgroundColor: "#0f1010",
					}}
				>
					<Avatar
						containerStyle={{
							marginTop: 10,
							marginBottom: 0,
							paddingBottom: 0,
							elevation: 10,
						}}
						size={100}
						rounded
						source={{ uri: baseURL + user.image }}
					/>
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly",
						width: "65%",
						backgroundColor: "#0f1010",
					}}
				>
					<View
						style={{ marginLeft: 10, marginRight: 10, alignItems: "center" }}
					>
						<Text
							style={{
								fontSize: 21,
								fontWeight: "bold",
								marginTop: 8,
								color: "#e7e7e7",
								backgroundColor: "#0f1010",
							}}
						>
							{trips.length}
						</Text>
						<Text
							style={{
								fontSize: 15,
								fontWeight: "normal",
								marginTop: 2,
								color: "#e7e7e7",
								backgroundColor: "#0f1010",
							}}
						>
							Posts
						</Text>
					</View>
					<View
						style={{
							marginLeft: 10,
							marginRight: 10,
							alignItems: "center",
							backgroundColor: "#0f1010",
						}}
					>
						<Text
							style={{
								fontSize: 21,
								fontWeight: "bold",
								marginTop: 8,
								color: "#e7e7e7",
								backgroundColor: "#0f1010",
							}}
						>
							230K
						</Text>
						<Text
							style={{
								fontSize: 15,
								fontWeight: "normal",
								marginTop: 2,
								color: "#e7e7e7",
								backgroundColor: "#0f1010",
							}}
						>
							Followers
						</Text>
					</View>

					{/* FOLLOWERS  */}

					<View
						style={{
							marginLeft: 10,
							alignItems: "center",
							backgroundColor: "#0f1010",
						}}
					>
						<Text
							style={{
								fontSize: 21,
								fontWeight: "bold",
								marginTop: 8,
								color: "#e7e7e7",
							}}
						>
							891
						</Text>
						<Text
							style={{
								fontSize: 15,
								fontWeight: "normal",
								marginTop: 2,
								color: "#e7e7e7",
							}}
						>
							Following
						</Text>
					</View>
				</View>
			</View>

			{/* POSTS  */}
			<View>
				<View
					style={{
						paddingLeft: 10,
						paddingTop: 10,
						backgroundColor: "#0f1010",
					}}
				>
					<Text style={{ fontSize: 16, fontWeight: "bold", color: "#e7e7e7" }}>
						{user.name}
					</Text>
					<Text
						style={{
							fontSize: 14,
							marginTop: 3,
							fontWeight: "normal",
							color: "#e7e7e7",
						}}
					>
						@{user.username}
					</Text>
					<Text
						style={{
							fontSize: 15,
							flex: 1,
							width: "100%",
							marginTop: 5,
							color: "#e7e7e7",
						}}
					>
						{user.bio}
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "flex-end",
						alignItems: "center",
						width: "100%",
						paddingHorizontal: 6,
						backgroundColor: "#0f1010",
					}}
				>
					<Button
						onPress={handleFollow}
						title={follow}
						buttonStyle={{
							backgroundColor: "#154c79",
						}}
						containerStyle={{
							width: "40%",
							margin: 5,
						}}
					/>
				</View>
			</View>
			<Divider style={{ marginTop: 10 }} />
			<View>{trips}</View>
		</ScrollView>
	);
};

export default observer(ProfilePage);
