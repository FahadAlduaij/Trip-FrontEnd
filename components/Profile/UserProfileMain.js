import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { Feather } from "react-native-vector-icons/";

// Components
import Tabs from "../tabNavigator/Tabs";

export default function UserProfileMain(props) {
	return (
		<ScrollView style={{ backgroundColor: "#0f1010" }}>
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
							backgroundColor: "#0f1010",
						}}
						size={100}
						rounded
						source={require("../images/tony.jpg")}
					/>
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly",
						width: "75%",
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
							170
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
						Tony Stark
					</Text>
					<Text
						style={{
							fontSize: 14,
							marginTop: 3,
							fontWeight: "normal",
							color: "#e7e7e7",
						}}
					>
						@tony_stark
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
						Hello everyone, my name is Tony stark and I am the founder of Stark
						International. I am the one who made Iron man suit and The Time
						Machine. Follow Me Now...
					</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					width: "100%",
					paddingHorizontal: 6,
					backgroundColor: "#0f1010",
				}}
			>
				<Button
					title="Edit Profile"
					buttonStyle={{
						backgroundColor: "#2f8ce3",
					}}
					containerStyle={{ width: "82%", marginTop: 10 }}
				/>
				<Button
					icon={<Feather name="settings" color="white" size={22} />}
					buttonStyle={{ backgroundColor: "#2f8ce3" }}
					containerStyle={{ width: "11%", marginTop: 10 }}
				/>
			</View>
			<View style={{ marginTop: 380 }}>
				<Tabs />
			</View>
		</ScrollView>
	);
}
