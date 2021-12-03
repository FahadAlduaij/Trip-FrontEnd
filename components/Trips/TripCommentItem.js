import React from "react";
import { observer } from "mobx-react";
import Moment from "react-moment";
import { Box, Divider, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";

const TripCommentItem = ({ comment }) => {
	return (
		<Box m="5">
			<Box>
				<Text style={styles.comment}>{comment.username}</Text>
				<Text style={styles.comment}>
					<Moment
						element={Text}
						format="YYYY/MM/DD HH:mm"
						date={new Date(comment.dateSent)}
					/>
				</Text>
				<Divider mt="2" />
			</Box>
			<VStack my="2">
				<Text color="white">{comment.message}</Text>
			</VStack>
		</Box>
	);
};

export default observer(TripCommentItem);

const styles = StyleSheet.create({
	comment: {
		fontSize: 15,
		color: "#696969",
	},
});
