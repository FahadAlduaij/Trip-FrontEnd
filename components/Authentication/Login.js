import "react-native-gesture-handler";
import React, { useState } from "react";
import { Text, TextInput, View, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, useToast } from "native-base";
import authStore from "../../stores/authStore";

const Login = ({ navigation }) => {
	const toast = useToast();

	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const handleSubmit = () => {
		authStore.Login(user, navigation, toast);
	};

	return (
		<SafeAreaView style={styles.body}>
			<View style={styles.container}>
				<Text style={styles.login}>Log in</Text>
				<Text style={styles.outsidebox}>Username</Text>
				<TextInput
					style={styles.box}
					placeholder="  Enter your username"
					placeholderTextColor="#858585"
					onChangeText={(username) => setUser({ ...user, username })}
				/>
				<Text style={styles.outsidebox}>Password</Text>
				<TextInput
					type="password"
					style={styles.box}
					placeholder="  Enter your password"
					placeholderTextColor="#858585"
					onChangeText={(password) => setUser({ ...user, password })}
				/>
				<LinearGradient
					colors={["#1e81b0", "#154c79"]}
					style={styles.button}
					start={{ y: 0.0, x: 0.0 }}
					end={{ y: 0.0, x: 1.0 }}
				>
					<Pressable onPress={handleSubmit}>
						<Text
							style={{
								color: "#ffff",
								alignSelf: "center",
								textAlignVertical: "center",
								fontSize: 20,
							}}
						>
							Log in
						</Text>
					</Pressable>
				</LinearGradient>
				<Text style={styles.signup}>
					Dont have an account?
					<Pressable onPress={() => navigation.navigate("Signup")}>
						<Text style={{ color: "#ffff" }}> Sign up</Text>
					</Pressable>
				</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 80,
		marginLeft: 10,
	},
	body: {
		backgroundColor: "#101010",
		flex: 1,
	},
	box: {
		marginHorizontal: 16,
		borderWidth: 3,
		padding: 10,
		margin: 10,
		marginBottom: 20,
		color: "#858585",
		textAlign: "left",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		height: 65,
		borderColor: "#212121",
		backgroundColor: "#171717",
	},
	button: {
		marginHorizontal: 17,
		marginTop: 40,
		textAlign: "center",
		margin: 10,
		color: "#ffff",
		borderRadius: 10,
		height: 55,
		padding: 15,
	},
	outsidebox: {
		marginHorizontal: 22,
		color: "white",
	},
	signup: {
		alignContent: "center",
		textAlign: "center",
		color: "#858585",
	},
	login: {
		marginBottom: 120,
		color: "#ffff",
		marginLeft: 25,
		fontSize: 35,
		fontWeight: "bold",
	},
});

export default Login;
