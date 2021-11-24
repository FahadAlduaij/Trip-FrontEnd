import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
	Button,
	Modal,
	FormControl,
	Input,
	Box,
	Icon,
	useToast,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

// stores
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";

const TripModal = () => {
	const [trip, setTrip] = useState({
		title: "",
		description: "",
		image: "",
	});
	const toast = useToast();

	// useEffect(() => {
	// 	(async () => {
	// 		if (Platform.OS !== "web") {
	// 			const { status } =
	// 				await ImagePicker.requestMediaLibraryPermissionsAsync();
	// 			if (status !== "granted") {
	// 				alert("Sorry, we need camera roll permissions to make this work!");
	// 			}
	// 		}
	// 	})();
	// }, []);

	const _pickImage = async () => {
		try {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: true,
				aspect: [4, 3],

				quality: 1,
			});

			if (!result.cancelled) {
				const localUri = result.uri;
				const filename = localUri.split("/").pop();
				const match = /\.(\w+)$/.exec(filename);
				const image = {
					uri: localUri,
					name: filename,
					type: match ? `image/${match[1]}` : `image`,
				};
				setTrip({ ...trip, image: image });
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = () => {
		tripStore.addTrip(trip, toast);
		tripStore.closeModal();
	};

	return (
		<Box>
			<Modal isOpen={tripStore.showModal} onClose={tripStore.closeModal}>
				<Modal.Content maxWidth="400px">
					<Modal.CloseButton />
					<Modal.Header>New Trip</Modal.Header>

					<Modal.Body>
						<FormControl>
							<FormControl.Label>Title</FormControl.Label>
							<Input
								placeholder="Enter title"
								onChangeText={(title) => setTrip({ ...trip, title })}
							/>
						</FormControl>

						<FormControl mt="3">
							<FormControl.Label>Description</FormControl.Label>
							<Input
								placeholder="Enter description"
								onChangeText={(description) =>
									setTrip({ ...trip, description })
								}
							/>
						</FormControl>

						<FormControl mt="3">
							<FormControl.Label>Image</FormControl.Label>
							<Button
								onPress={_pickImage}
								variant="outline"
								colorScheme="coolGray"
								leftIcon={
									<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
								}
							>
								Upload Image
							</Button>

							{/* <Input placeholder="Choose Image" /> */}
						</FormControl>
					</Modal.Body>

					<Modal.Footer>
						<Button.Group space={2}>
							<Button
								variant="ghost"
								colorScheme="blueGray"
								onPress={tripStore.closeModal}
							>
								Cancel
							</Button>
							<Button style={styles.btnCreate} onPress={handleSubmit}>
								Create
							</Button>
						</Button.Group>
					</Modal.Footer>
				</Modal.Content>
			</Modal>
		</Box>
	);
};

export default observer(TripModal);

const styles = StyleSheet.create({
	btnCreate: {
		backgroundColor: "#0891b2",
	},
});
