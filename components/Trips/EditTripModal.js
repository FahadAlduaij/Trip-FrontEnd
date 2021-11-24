import React, { useState } from "react";
import { Button, Modal, FormControl, Input, Icon, useToast } from "native-base";
import { StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

// Stores
import tripStore from "../../stores/tripStore";

const EditTripModal = ({ trip }) => {
	const [updatedTrip, setUpdatedTrip] = useState({
		title: "",
		description: "",
		image: "",
	});

	const [showModal, setShowModal] = useState(false);
	const toast = useToast();

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
				setUpdatedTrip({ ...updatedTrip, image: image });
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = () => {
		tripStore.editTrip(trip, updatedTrip, toast);
		// tripStore.closeModal();
	};

	return (
		<>
			<Button style={styles.btnEditTrip} onPress={() => setShowModal(true)}>
				Edit Trip
			</Button>

			<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
				<Modal.Content maxWidth="400px">
					<Modal.CloseButton />
					<Modal.Header>Edit Trip</Modal.Header>
					<Modal.Body>
						<FormControl>
							<FormControl.Label>Edit Name</FormControl.Label>
							<Input
								placeholder="Enter Title"
								onChangeText={(title) =>
									setUpdatedTrip({ ...updatedTrip, title })
								}
							/>
						</FormControl>
						<FormControl mt="3">
							<FormControl.Label>Edit Description</FormControl.Label>
							<Input
								placeholder="Enter Description"
								onChangeText={(description) =>
									setUpdatedTrip({ ...updatedTrip, description })
								}
							/>
						</FormControl>
						<FormControl mt="3">
							<FormControl.Label>Change Image</FormControl.Label>
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
						</FormControl>
					</Modal.Body>
					<Modal.Footer>
						<Button.Group space={2}>
							<Button
								variant="ghost"
								colorScheme="blueGray"
								onPress={() => {
									setShowModal(false);
								}}
							>
								Cancel
							</Button>
							<Button style={styles.btnCreate} onPress={handleSubmit}>
								Save
							</Button>
						</Button.Group>
					</Modal.Footer>
				</Modal.Content>
			</Modal>
		</>
	);
};

export default EditTripModal;

const styles = StyleSheet.create({
	btnEditTrip: {
		backgroundColor: "#737373",
		margin: 5,
		width: 100,
	},
	btnCreate: {
		backgroundColor: "#0891b2",
	},
});
