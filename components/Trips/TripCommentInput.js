import React, { useState } from "react";
import {
	useToast,
	Modal,
	FormControl,
	Container,
	Button,
	Input,
	VStack,
} from "native-base";
import { StyleSheet } from "react-native";

// Stores
import tripStore from "../../stores/tripStore";

const TripCommentInput = ({ tripId }) => {
	const toast = useToast();
	const [userComment, setUserComment] = useState({ message: "" });

	const handleSubmit = () => {
		tripStore.createCommentForTrip(tripId, userComment, toast);
		setUserComment({ message: "" });
	};

	return (
		<VStack width="90%" mx="3" my="3">
			<Container>
				<FormControl>
					<FormControl.Label _text={{ bold: true, color: "#fff" }}>
						Add Comments
					</FormControl.Label>
					<Input
						placeholder=" Enter Comment"
						onChangeText={(message) => setUserComment({ message: message })}
					/>
					{/* <FormControl.HelperText _text={{ fontSize: "xs" }}>
						Name should contain atleast 3 character.
					</FormControl.HelperText> */}
					<FormControl.ErrorMessage _text={{ fontSize: "xs" }}>
						Error Name
					</FormControl.ErrorMessage>
				</FormControl>

				<Button style={styles.btnSubmit} onPress={handleSubmit}>
					Submit
				</Button>
			</Container>
		</VStack>
	);
};

export default TripCommentInput;

const styles = StyleSheet.create({
	btnSubmit: {
		backgroundColor: "#154c79",
		width: 80,
		marginTop: 10,
	},
});
