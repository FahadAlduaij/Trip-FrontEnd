import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, StatusBar } from "react-native";
import {
	AntDesign,
	MaterialCommunityIcons,
	Feather,
} from "react-native-vector-icons";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Avatar } from "react-native-elements";
import { Pressable } from "native-base";

// Stores
import { baseURL } from "../../stores/instance";

const TripItem = ({ trip, navigation }) => {
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
			<View style={{ flexDirection: "row", alignItems: "center" }}>
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
					<Text style={{ marginLeft: -97, color: "#e7e7e7" }}>Like</Text>

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
			</View>
		</View>
	);
};

export default observer(TripItem);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
	},
	scrollView: {
		marginHorizontal: 20,
	},
});
