import React, { useState } from "react";
import {
	useToast,
	Modal,
	FormControl,
	Container,
	Button,
	Input,
	VStack,
	Flex,
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
		<Container mx="3" my="3">
			<VStack w="100%">
				<FormControl>
					<FormControl.Label _text={{ bold: true, color: "#fff" }}>
						Add Comments
					</FormControl.Label>
					<Input
						p="3"
						color="#fff"
						placeholder=" Enter Comment"
						onChangeText={(message) => setUserComment({ message: message })}
						variant="rounded"
						my="1"
					/>
					{/* <FormControl.HelperText _text={{ fontSize: "xs" }}>
						Name should contain atleast 3 character.
					</FormControl.HelperText>
					<FormControl.ErrorMessage _text={{ fontSize: "xs" }}>
						Error Name
					</FormControl.ErrorMessage> */}
				</FormControl>

				<Button style={styles.btnSubmit} onPress={handleSubmit}>
					Send
				</Button>
			</VStack>
		</Container>
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
