import { observer } from "mobx-react";
import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import {
	AntDesign,
	MaterialCommunityIcons,
	Feather,
} from "react-native-vector-icons";
import { View, Image, TouchableOpacity } from "react-native";
import { Avatar, Text } from "react-native-elements";
import { Flex, HStack, Pressable, Stack } from "native-base";
import Moment from "react-moment";

// Stores
import { baseURL } from "../../stores/instance";

const SearchTripItem = ({ trip, navigation }) => {
	const user = trip.owner;

	return (
		<View>
			<Pressable
				onPress={() => navigation.navigate("ProfilePage", { trip: trip })}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						padding: 10,
						paddingLeft: 15,
						borderTopColor: "black",
						borderTopWidth: 0.5,
						backgroundColor: "transparent",
						marginTop: 20,
					}}
				>
					<Avatar
						size="medium"
						rounded
						source={{ uri: baseURL + user.image }}
					/>

					<View style={{ marginLeft: 10, marginBottom: 5 }}>
						<Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
							{user.name}
						</Text>

						<Text
							style={{ fontSize: 14, fontWeight: "normal", color: "#e7e7e7" }}
							numberOfLines={1}
							ellipsizeMode="tail"
						>
							{trip.title}
						</Text>
					</View>
				</View>
			</Pressable>
			<View>
				<Pressable
					onPress={() => navigation.navigate("TripDetail", { trip: trip })}
				>
					<Image
						style={{
							height: 300,
							width: "100%",
							resizeMode: "cover",
							borderRadius: 10,
						}}
						source={{ uri: baseURL + trip.image }}
						alt="image"
					/>
				</Pressable>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<View
					style={{
						width: "100%",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						paddingBottom: 5,
					}}
				>
					<TouchableOpacity
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginLeft: 5,
						}}
					>
						<Image
							source={require("../images/icons/liked.png")}
							style={{ width: 15, height: 15, marginTop: 8 }}
						/>
						<Text
							style={{
								fontSize: 13,
								fontWeight: "bold",
								marginTop: 7,
								marginLeft: 5,
								color: "#e7e7e7",
							}}
						>
							32
						</Text>
						<Text
							style={{
								fontSize: 13,
								fontWeight: "normal",
								marginLeft: 5,
								marginTop: 7,
								color: "#949298",
							}}
						>
							Liked by FahadKh.. and 31 others
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginRight: 5,
							marginTop: 7,
						}}
					>
						<Text
							style={{ fontWeight: "bold", fontSize: 13, color: "#e7e7e7" }}
						>
							8 comments
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ flexDirection: "column", alignItems: "center" }}>
				<View
					style={{
						marginTop: 6,
						flexDirection: "row",
						alignItems: "center",
						width: "100%",
						justifyContent: "space-between",
						paddingHorizontal: 10,
						paddingBottom: 4,
					}}
				>
					<AntDesign name="like2" size={20} color="#e7e7e7" />
					<Text style={{ marginLeft: -80, color: "#e7e7e7" }}>Like</Text>

					<TouchableOpacity>
						<TouchableOpacity
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<MaterialCommunityIcons
								name="comment-outline"
								size={20}
								color="#e7e7e7"
							/>
							<Text style={{ marginLeft: 5, color: "#e7e7e7" }}>Comment</Text>
						</TouchableOpacity>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<Feather name="share" size={20} color="#e7e7e7" />
						<Text style={{ marginLeft: 5, color: "#e7e7e7" }}>Share</Text>
					</TouchableOpacity>
				</View>

				<Moment
					style={{
						color: "#737373",
						letterSpacing: 2,
						fontSize: 13,
						fontWeight: "bold",
						marginTop: 10,
						marginLeft: 10,
						alignSelf: "flex-start",
					}}
					element={Text}
					format="YYYY/MM/DD  HH:mm"
					date={new Date(trip.createdAt)}
				/>
			</View>
		</View>
	);
};

export default observer(SearchTripItem);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
	},
	scrollView: {
		marginHorizontal: 20,
	},
});
