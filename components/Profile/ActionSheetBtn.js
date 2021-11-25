import React from "react";
import { Actionsheet, useDisclose, Icon } from "native-base";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import { Entypo, Feather, AntDesign } from "@expo/vector-icons";

// Stores
import authStore from "../../stores/authStore";

export function ActionSheetBtn({ setShowModal }) {
	const { isOpen, onOpen, onClose } = useDisclose();
	const navigation = useNavigation();

	const handleSignOut = () => {
		navigation.navigate("Home");
		authStore.signout();
	};

	return (
		<>
			<Button
				icon={<Feather name="settings" color="white" size={22} />}
				buttonStyle={{ backgroundColor: "#154c79" }}
				containerStyle={{ width: "12%", marginTop: 10 }}
				onPress={onOpen}
			/>

			<Actionsheet isOpen={isOpen} onClose={onClose}>
				<Actionsheet.Content>
					<Actionsheet.Item
						onPress={handleSignOut}
						startIcon={
							<Icon
								as={AntDesign}
								color="trueGray.400"
								mr="1"
								size="6"
								name="home"
							/>
						}
						onPress={() => {
							navigation.navigate("timeline");
							onClose();
						}}
					>
						Timeline
					</Actionsheet.Item>
					<Actionsheet.Item
						onPress={handleSignOut}
						startIcon={
							<Icon
								as={Feather}
								color="trueGray.400"
								mr="1"
								size="6"
								name="search"
							/>
						}
						onPress={() => {
							navigation.navigate("Search");
							onClose();
						}}
					>
						Search
					</Actionsheet.Item>
					<Actionsheet.Item
						onPress={handleSignOut}
						startIcon={
							<Icon
								as={Feather}
								color="trueGray.400"
								mr="1"
								size="6"
								name="edit"
							/>
						}
						onPress={() => {
							setShowModal(true);
							onClose();
						}}
					>
						Edit Profile
					</Actionsheet.Item>
					<Actionsheet.Item
						onPress={() => {
							handleSignOut();
							onClose();
						}}
						startIcon={
							<Icon
								as={Entypo}
								color="trueGray.400"
								mr="1"
								size="6"
								name="log-out"
							/>
						}
					>
						Sign out
					</Actionsheet.Item>
				</Actionsheet.Content>
			</Actionsheet>
		</>
	);
}

export default ActionSheetBtn;
