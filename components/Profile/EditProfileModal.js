import React, { useState } from "react";
import { Modal, FormControl, Input, Icon, Button } from "native-base";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

// Stores
import authStore from "../../stores/authStore";

const EditProfileModal = ({ showModal, setShowModal }) => {
	const [update, setUpdate] = useState(authStore.user ? authStore.user : "");

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
				setUpdate({ ...update, image });
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = () => {
		authStore.editUser(update);
		setShowModal(false);
	};

	return (
		<>
			<Button style={styles.btnEditProfile} onPress={() => setShowModal(true)}>
				Edit Profile
			</Button>

			<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
				<Modal.Content>
					<Modal.CloseButton />
					<Modal.Header>Edit Profile</Modal.Header>
					<Modal.Body>
						<FormControl>
							<FormControl.Label>Edit Name</FormControl.Label>
							<Input onChangeText={(name) => setUpdate({ ...update, name })} />
						</FormControl>
						<FormControl mt="3">
							<FormControl.Label>Edit Bio</FormControl.Label>
							<Input onChangeText={(bio) => setUpdate({ ...update, bio })} />
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
							<Button style={styles.btnSave} onPress={handleSubmit}>
								Save
							</Button>
						</Button.Group>
					</Modal.Footer>
				</Modal.Content>
			</Modal>
		</>
	);
};

export default EditProfileModal;

const styles = StyleSheet.create({
	btnEditProfile: {
		backgroundColor: "#154c79",
		width: "80%",
		marginTop: 10,
	},
	btnSave: {
		backgroundColor: "#154c79",
		width: 80,
	},
});
